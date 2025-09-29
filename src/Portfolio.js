import Footer from "./footer";
function Portfolio() {
  return (
    <>
      <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2>My Projects</h2>
        <p className="portfolio-intro">
          Here are some of my live projects showcasing my skills in frontend development.
        </p>

        <div className="portfolio-grid">
 <div className="portfolio-card">
            <div className="portfolio-content">
              <h3>My Portfolio</h3>
              <p>This personal portfolio you are currently viewing, built using React.</p>
              <a href="https://rohitrana-coder.github.io/my-portfolio" className="btn">
                View Portfolio
              </a>
            </div>
          </div>


          {/* Project 1 */}
          <div className="portfolio-card">
            <div className="portfolio-content">
              <h3>USA Site</h3>
              <p>A modern responsive website with clean design and UI.</p>
              <a href="https://rohitrana-coder.github.io/my-cite/" target="_blank" rel="noopener noreferrer" className="btn">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="portfolio-card">
            <div className="portfolio-content">
              <h3>Collage Site</h3>
              <p>A creative project focusing on layout, typography, and responsiveness.</p>
              <a href="https://rohitrana-coder.github.io/my-rana/" target="_blank" rel="noopener noreferrer" className="btn">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 */}
         

        </div>
      </div>
    </section>
    <Footer/>   
    </>
  );
}
export default Portfolio;
