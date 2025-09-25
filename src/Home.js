import Work from './Work';
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from './footer';

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload na ho
    alert("✅ Your data is submitted");
    e.target.reset();
  };
  return (
    <>
      <div className="container-fulid homemain" id='firstpage'>
        <div className="text">
          <h1>Frontend<br />
            Developer.
          </h1>
          <h3>I like to craft solid and scalable frontend products with great user experiences. </h3>
          <div className="text2">
            <div className="textone">
              <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            </div>
            <div className="texttwo">
              <p> Proven experience building successful products for clients across several countries.</p>
            </div>
          </div>
        </div>
        <div className=" image">
          <img src="img/rohit.png" alt="rohit image" />
        </div>
      </div>
      {/* <p  id='secondpage'></p> */}
      <div className="seconddiv" id='secondpage' >
        <div className="secondtext1">
          <h1>Design</h1>
          <p>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
        </div>
        <div className="secondtext2" >
          <h1>Engineering</h1>
          <p>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
        </div>

      </div>
      <div className='thirdmain' id='thirdpage'>
        <div className="thirddiv">
          <div className="thirdone">
            <h1>I build &
              design stuff</h1>
            <h3>Open source
              projects, web apps
              and experimentals.
            </h3>
          </div>
          <Link className="button" to="/Work">Button  <i class="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="education-section">
          <h2 className="edu-title">🎓 My Education & Training</h2>
          <div className="edu-timeline">
            <div className="edu-card">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p className="edu-place">Graduated</p>
              <p className="edu-desc">
                Built strong foundation in computer science, programming & IT concepts.
              </p>
            </div>
            <div className="edu-card">
              <h3>Frontend Developer Training</h3>
              <p className="edu-place">CADD Centre, Sector 11 Panchkula</p>
              <p className="edu-desc">
                Hands-on training in HTML, CSS,bootstrap, JavaScript, and React JS to craft responsive web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='fourthdiv' id='fourthpage'>
        <div className='fourthtext'>
          <h1>Send  me a masssge</h1>
          <h3>Got a question or proposal, or just want
            to say hello? Go ahead.</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='fourthinput'>
            <label> Your Name <br />
              <input type='text' placeholder='Enter your name' required />
            </label>
            <label className='email'>Email Address<br />
              <input type='email' placeholder='Enter your email' required />
            </label>
            <div className='fourttextarea'>
              <label>Your Message<br />
                <textarea
                  placeholder='Write your message here...'
                  required
                />
              </label>
            </div>

            <button type='submit'>SHOOT  <i class="fa-solid fa-arrow-right"></i></button>
          </div>


        </form>
      </div>


      <Footer />
      <div className='icon-link'>
        <a href='#firstpage'><i class="fa-solid fa-square"></i></a>
        <a href='#secondpage'><i class="fa-solid fa-square"></i></a>
        <a href='#thirdpage'><i class="fa-solid fa-square"></i></a>
        <a href='#fourthpage'><i class="fa-solid fa-square"></i></a>
        <a href='#contact'><i class="fa-solid fa-square"></i></a>
      </div>

    </>


  );
}
export default Home;