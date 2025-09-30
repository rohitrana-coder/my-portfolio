
import Footer from './footer';
import './App.css';
function About() {
      
  return (
    <>

<section class="about-section">
  <div class="about-container">
    
    
    <div class="about-image">
         <img src={process.env.PUBLIC_URL + "/img/rohit.png" }alt="rohit image" />
    </div>
    

    <div class="about-content">.
      <h2>About Me</h2>
      <p>
        Hi, I'm <strong>Rohit Thakur</strong>, a passionate <strong>Frontend Developer</strong>.  
        I love creating modern, responsive, and user-friendly websites using 
        <strong>HTML, CSS, JavaScript, Bootstrap, and React</strong>.
      </p>
      <p>
        My focus is always on <em>clean design</em>, <em>smooth user experience</em>, 
        and <em>performance</em>. I’m also learning new technologies to become a 
        <strong>Full-Stack Developer</strong>.
      </p>
      <p>
        Beyond coding, I enjoy <strong>boxing</strong> and exploring the latest tech trends.  
      </p>
 HEAD
   <a href="tel:+919817266952"  class="btn">
    <i class="fas fa-phone"></i> Contact Me
  </a>
      <a href="tel:+919817266952"  class="btn">
    <i class="fas fa-phone"></i> Contact Me
  </a>
   

    </div>

  </div>
</section>


<Footer/>

  </>
  );
}
export default About;
