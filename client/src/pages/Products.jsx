import { useEffect, useState } from "react"; //importing hooks

export default function Products() { //defining product page component
    const [products, setProducts] = useState([]);

    useEffect (() => {
        fetch("http://localhost:5000/api/products")
            .then( res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <h1>Planners</h1>
            
            <div>
                {products.map(p => (
                    <div kay={p._id}>
                        <h3>{p.title}</h3>
                        <p>{p.price}</p>
                    </div>
                ))}
            </div>
        </>
    )


}