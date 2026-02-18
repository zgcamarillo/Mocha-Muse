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
                    <div id="icons">
                        <img src="/symbols/loupe.png" alt="search image"></img>
                        <img src="symbols/user.png" alt="user image"></img>
                        <img src="/symbols/heart.png" alt="favorite image"></img>
                        <img src="/symbols/shopping-bag.png" alt="shopping bag image"></img>
                    </div>
                    
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