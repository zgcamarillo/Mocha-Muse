import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div id="navTop">
                <div id="logo">
                    Mocha Muse
                </div>
                <div id="searchLogin">
                    <input type="text" placeholder="Search for anything...">
                    </input>
                </div>
            </div>
            <div id="links">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/products">PRODUCTS</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>
        </nav>
    )
}