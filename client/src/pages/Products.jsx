import { useEffect, useState } from "react"; //importing hooks

export default function Products() { //defining product page component
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedType, setSelectedType] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
    console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);

    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err));
}, [])
    function addToCart(product) {
        setCart([...cart, product]);
        console.log("Cart:", [...cart, product]); // so you can see it working
}
    const filteredProducts = products.filter((p) => {
    const typeValue = Array.isArray(p.type) ? p.type : [p.type];
    const matchesType = selectedType === "All" || typeValue.includes(selectedType);

    const matchesPrice = !maxPrice || Number(p.price) <= Number(maxPrice);

  return matchesType && matchesPrice;
});
    return (
        <div id="plannerPage">
            <div className="shopTop">
                <div id="header">
                    <h1>Planners</h1>
                    <h2>Stay organized with planners for every need. Find custom planners, dated & undated planners, specialty layouts and academic planners. </h2>
                </div>
            </div>
            <div className="controlsRow">
                <p>Total: {filteredProducts.length}</p>

                <input className="maxPriceInput" type="number" placeholder="Max Price" onChange={(e) => setMaxPrice(e.target.value)}
                ></input>
            </div>
            <aside className="filters">
                <select className="typeSelect" onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
                    <option value="All">All Types</option>
                    <option value="Academic">Academic</option>
                    <option value="Budget">Budget</option>
                    <option value="Undated">Undated</option>
                    <option value="Life Planning">Life Planning</option>
                    <option value="For Teachers">For Teachers</option>
                </select>
            </aside>
            <div className="productsGrid">
                {products
                    .filter((p) => {
                        const typeValue = Array.isArray(p.type) ? p.type : [p.type];
                        const matchesType = selectedType === "All" || typeValue.includes(selectedType);

                        const matchesPrice = 
                            !maxPrice || p.price <= Number(maxPrice);

                        return matchesType && matchesPrice; 
                    })
                    .map(p => (
                    <div className="productCard"
                        key={p._id}>
                        <img className="productImg"
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                        />
                        <h3 className="productTitle">{p.title}</h3>
                        <p className="productDesc">{p.description}</p>
                        <p className="productPrice">${Number(p.price).toFixed(2)}</p>
                        <button 
                            className="addBtn"
                            onClick={() => addToCart(p)}
                        >
                            Add to Cart
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )


}