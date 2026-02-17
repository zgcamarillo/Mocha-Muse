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
                    <img src="/symbols/loupe.png"></img>
                    <img src="symbols/user.png"></img>
                    <img src="/symbols/heart.png"></img>
                    <img src="/symbols/shopping-bag.png"></img>
                    
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