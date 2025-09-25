import Footer from "./footer";

function Services() {
return(
  <>
 <section class="services-section" id="services">
  <div class="services-container">
    <h2>My Services</h2>
    <p class="services-intro">
      I provide modern web solutions with a focus on clean design, responsive layouts, and interactive user experiences.
    </p>

    <div class="services-grid">

      
      <div class="service-card">
        <i class="fas fa-pencil-ruler"></i>
        <h3>Web Design</h3>
        <p>Modern and responsive website designs with a focus on clean UI and great user experience.</p>
      </div>

      
      <div class="service-card">
        <i class="fas fa-code"></i>
        <h3>Frontend Development</h3>
        <p>Building websites using HTML, CSS, JavaScript, and React for fast and interactive results.</p>
      </div>

      
      <div class="service-card">
        <i class="fas fa-mobile-alt"></i>
        <h3>Responsive Design</h3>
        <p>Ensuring websites look perfect on desktops, tablets, and smartphones.</p>
      </div>

  
      <div class="service-card">
        <i class="fas fa-laptop-code"></i>
        <h3>React Development</h3>
        <p>Creating dynamic single-page applications with reusable components and clean code.</p>
      </div>

    </div>
  </div>
</section>
<Footer/>
</>
);
}
export default  Services;