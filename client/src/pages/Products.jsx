import { useEffect, useState } from "react"; //importing hooks

export default function Products() { //defining product page component
    const [products, setProducts] = useState([]);
    const [selectedType, setSelectedType] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect (() => {
        fetch("http://localhost:5000/api/products")
            .then( res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div id="plannerPage" style={{
            margin: "40px 35px",
        }}>
            <div id="header" 
                style = {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <h1 style={{
                    margin: 0,
                    color:"#683924",

                }}>Planners</h1>
                <h2>Stay organized with planners for every need. Find custom planners, dated & undated planners, specialty layouts and academic planners. </h2>
                
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                margin: "20px 30px",
            }}>
                <p>Total: {products.length}</p>
                {/* <select onChange={(e) => setSelectedType(e.target.value)} style = {{
                    borderRadius: "10px",
                    padding: "12px"
                }}>
                    <option value="All">All Types</option>
                    <option value="Academic">Academic</option>
                    <option value="Budget">Budget</option>
                    <option value="Undated">Undated</option>
                    <option value="Life Planning">Life Planning</option>
                    <option value="For Teachers">For Teachers</option>
                </select> */}

                <input type="number" placeholder="Max Price" onChange={(e) => setMaxPrice(e.target.value)}
                style={{
                    padding: "3px 7px",
                    borderRadius: "10px",
                }}></input>
            </div>
            <aside>
                <select onChange={(e) => setSelectedType(e.target.value)} style = {{
                    borderRadius: "10px",
                    padding: "12px"
                }}>
                    <option value="All">All Types</option>
                    <option value="Academic">Academic</option>
                    <option value="Budget">Budget</option>
                    <option value="Undated">Undated</option>
                    <option value="Life Planning">Life Planning</option>
                    <option value="For Teachers">For Teachers</option>
                </select>
            </aside>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "24px",
                    marginTop: "20px",
                }}
            >
                {products
                    .filter((p) => {
                        const matchesType =
                            selectedType === "All" || (Array.isArray(p.type) && p.type.includes(selectedType));

                        const matchesPrice = 
                            !maxPrice || p.price <= Number(maxPrice);

                        return matchesType && matchesPrice; 
                    })
                    .map(p => (
                    <div 
                        key={p._id}
                        style= {{
                            border: "1px solid #eee",
                            padding: "16px",
                            borderRadius: "12px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <img 
                            src={p.image}
                            alt={p.title}
                            style={{width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px"}}
                        />
                        <h3>{p.title}</h3>
                        <p>${p.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )


}