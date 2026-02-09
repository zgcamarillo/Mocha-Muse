import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/products">PRODUCTS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
        </nav>
    )
}