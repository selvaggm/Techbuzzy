import '../Styles/About.css';
import aboutImg from '../assets/images/about_img.png';
import '../Styles/GlobalStyles.css'


function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            We are a Chennai-based IT solutions company with 7+ years of experience, focused on turning innovative technology into real business results. Our team of passionate developers, architects, and engineers helps startups and enterprises innovate, scale, and modernize their digital capabilities.
            We specialize in custom software, mobile apps, AI & data solutions, cloud engineering, cybersecurity, and QA testing, delivering solutions built for performance, security, and long-term scalability.
            Driven by technical excellence, transparency, and a customer-first mindset, we create user-focused, future-ready products that solve real business challenges.
            More than a technology provider,
            we are your digital transformation partner — committed to innovation, reliability, and sustainable growth.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>150+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>7+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>
      </div>
    </section>
  );
}


export default About;
