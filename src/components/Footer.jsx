
import './Footer.css';

export function Footer(){
    return(
        <>
    <footer className="responsive-footer">
    <div className="footer-container">
        <div className="footer-columns">
        
            <div className="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            
            
            <div className="footer-column">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            
        
            <div className="footer-column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>
            
    
            <div className="footer-column">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">GDPR</a></li>
                </ul>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </div>
</footer>
</>
    )
}