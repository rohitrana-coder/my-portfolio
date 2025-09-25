import React from 'react'
import { Link } from "react-router-dom";
 function Footer() {
  return (
    <div>
      <section class="full-footer" id="contact">
        <div class="footer-container">


          <div class="footer-col">
            <h3>About Me</h3>
            <p>Hi, I'm Rohit Thakur. A passionate frontend developer who loves creating clean, responsive, and user-friendly websites.</p>
          </div>


          <div class="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li className="nav-item">
                <Link to="/" className="Link">
                  <a className="nav-link active" href="/Home">Home</a></Link>
              </li>
              <li className="nav-item" >
                <Link to="/about" className="Link">
                  <a className="nav-link" href="/About">About</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="Link">
                  <a className="nav-link" href="">Services</a>
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/portfolio" className="Link">
                  <a className="nav-link" href="#">Portfolio</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="Link">
                  <a className="nav-link" href="/Contact">Contact</a></Link>
              </li>
            </ul>
          </div>


          <div class="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:rohitrana9992@gmail.com"><i class="fas fa-envelope"></i> Email</a></li>
              <li><a href="https://wa.me/919817266952" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
              <li><a href="https://instagram.com/rohit_rana9466" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="https://facebook.com/https://www.facebook.com/share/1CgnwzveF2/?mibextid=qi2Omg" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
            </ul>
          </div>


          <div class="footer-col">
            <h3>Social</h3>
            <ul>
              <li><a href="https://x.com/RohitRana19847" target="_blank">X (Twitter)</a></li>

            </ul>
          </div>
          <div class="footer-col">
            <h3>Professional Links</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/https://www.linkedin.com/in/rohit-rana-94917b382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://www.indeed.com/career/Rohit Rana" target="_blank"><i class="fas fa-briefcase"></i> Indeed</a></li>
              <li><a href="https://www.workindia.in/jobseeker/Rohit Rana" target="_blank"><i class="fas fa-user-tie"></i> WorkIndia</a></li>
            </ul>
          </div>

        </div>
        <p class="copy">© 2025 Rohit Thakur. All rights reserved.</p>
      
      </section>

    </div>
  )
}
export default Footer;
