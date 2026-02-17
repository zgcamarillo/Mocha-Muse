export default function Footer() {
    return (
        <footer>
            <div id="footerLinks"> 
                <div id="about" class="footerSection">
                    <h3>About The Creator</h3>
                    <a href="">My Story</a>
                    <a href="">Retail Partners</a>
                    <a href="">Affiliate Program</a>
                </div>
                <div id="help">
                    <h3>Help</h3>
                    <a href="">Need Help?</a>
                    <a href="">Track Order</a>
                    <a href="">Student Discounts</a>
                    <a href="">Sign Up for Text</a>
                </div>
                <div id="socials">
                    <h3>Follow Us</h3>  
                        <div id="socialLinks">
                            <a href="https://instagram.com">
                                <img src="/symbols/instagram.png"/>
                            </a>
                            <a href="https://facebook.com">
                                <img src="/symbols/facebook.png"></img>
                            </a>
                            <a href="https://pinterest.com">
                                <img src="/symbols/pinterest-logo.png"></img>
                            </a>
                            <a href="https://tiktok.com">
                                <img src="/symbols/tiktok.png"></img>
                            </a>
                        </div>
                </div>
                <div id="legal">
                    <h3>Legal</h3>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Web Accessibility</a>
                </div>
            
               
            </div>
            <p> © {new Date().getFullYear()} Mocha Muse </p>
        </footer>
    ) 
}