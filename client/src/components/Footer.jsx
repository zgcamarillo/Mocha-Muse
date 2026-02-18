export default function Footer() {
    return (
        <footer>
            <div id="footerLinks"> 
                <div id="about" className="footerSection">
                    <h3>About The Creator</h3>
                    <a href="">My Story</a>
                    <a href="">Retail Partners</a>
                    <a href="">Affiliate Program</a>
                </div>
                <div id="help" className="footerSection">
                    <h3>Help</h3>
                    <a href="">Need Help?</a>
                    <a href="">Track Order</a>
                    <a href="">Student Discounts</a>
                    <a href="">Sign Up for Text</a>
                </div>
                <div id="socials" className="footerSection">
                    <h3>Follow Us</h3>  
                        <div id="socialLinks">
                            <a href="https://instagram.com" aria-label="Instagram">
                                <img src="/symbols/instagram.png" alt="Instagram"/>
                            </a>
                            <a href="https://facebook.com" aria-label="Facebook">
                                <img src="/symbols/facebook.png" alt="Facebook"></img>
                            </a>
                            <a href="https://pinterest.com" aria-label="Pinterest">
                                <img src="/symbols/pinterest-logo.png" alt="Pinterest"></img>
                            </a>
                            <a href="https://tiktok.com" aria-label="TikTok">
                                <img src="/symbols/tiktok.png" alt="TikTok"></img>
                            </a>
                        </div>
                </div>
                <div id="legal" className="footerSection">
                    <h3>Legal</h3>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Web Accessibility</a>
                </div>
            
               
            </div>
            <div className="footerBottom">
            <p> © {new Date().getFullYear()} Mocha Muse </p>
            </div>
        </footer>
    ) 
}