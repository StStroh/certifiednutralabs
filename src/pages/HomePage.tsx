import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/sswsssss.jpg" alt="Certified Nutra Labs" className="logo-image" />
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#certifications">Certifications</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/quote" className="cta-button">Get a Quote</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Premium Nutraceutical Manufacturing</h2>
          <p className="hero-subtitle">NSF GMP & Sport Certified - Trusted by Leading Brands Worldwide</p>
          <Link to="/quote" className="hero-cta">Request a Quote</Link>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <div className="container">
          <h2>Our Certifications</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-badge">NSF</div>
              <h3>NSF GMP Registered</h3>
              <p>Certified Good Manufacturing Practices ensuring the highest quality standards in every product we manufacture.</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge sport">SPORT</div>
              <h3>NSF Sport Certified</h3>
              <p>NSF Certified for Sport products, ensuring banned substance testing and compliance for athletic supplements.</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">FDA</div>
              <h3>FDA Registered</h3>
              <p>Fully compliant with FDA regulations and registered facility for dietary supplement manufacturing.</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">ISO</div>
              <h3>ISO Certified</h3>
              <p>ISO 9001 certified quality management systems ensuring consistent, reliable production processes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Custom Formulation</h3>
              <p>Work with our expert team to develop custom supplement formulations tailored to your brand's unique needs and specifications.</p>
            </div>
            <div className="service-card">
              <h3>Private Label Manufacturing</h3>
              <p>Turn-key private label solutions from formulation to packaging, helping you bring your supplement line to market quickly.</p>
            </div>
            <div className="service-card">
              <h3>Contract Manufacturing</h3>
              <p>Flexible contract manufacturing services with scalable production capabilities to meet your growing demand.</p>
            </div>
            <div className="service-card">
              <h3>Packaging Solutions</h3>
              <p>Complete packaging services including bottles, labels, and fulfillment to deliver market-ready products.</p>
            </div>
            <div className="service-card">
              <h3>Quality Testing</h3>
              <p>Comprehensive quality control and third-party testing to ensure every batch meets the highest standards.</p>
            </div>
            <div className="service-card">
              <h3>Regulatory Compliance</h3>
              <p>Expert guidance on regulatory requirements and compliance to keep your products market-ready and legal.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Certified Nutra Labs</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                With over 20 years of experience in nutraceutical manufacturing, Certified Nutra Labs is a trusted partner
                for brands seeking premium quality supplements. Our NSF GMP registered facility ensures every product meets
                the highest standards of quality and safety.
              </p>
              <p>
                We specialize in custom formulation, private label manufacturing, and contract manufacturing services.
                Our state-of-the-art facility is equipped with cutting-edge technology and operated by experienced professionals
                committed to excellence.
              </p>
              <p>
                From initial formulation to final packaging, we work closely with our clients to bring their vision to life.
                Our comprehensive services include product development, regulatory compliance guidance, quality testing,
                and fulfillment solutions.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>20+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Products Manufactured</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Certified Nutra Labs has been instrumental in bringing our supplement line to market. Their attention to detail
                and commitment to quality is unmatched. The NSF certification gives us and our customers complete confidence.
              </p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>CEO, VitaHealth</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Working with Certified Nutra Labs has been a game-changer for our business. Their expertise in formulation
                and regulatory compliance saved us months of development time. Highly recommended!
              </p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>Founder, Peak Performance Nutrition</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                From concept to finished product, the team at Certified Nutra Labs exceeded our expectations. Their
                state-of-the-art facility and professional staff make them the perfect manufacturing partner.
              </p>
              <div className="testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>Director of Operations, Pure Wellness Co.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get Started Today</h2>
          <p className="contact-subtitle">Ready to bring your supplement brand to life? Request a quote and our team will get back to you within 24 hours.</p>
          <Link to="/quote" className="contact-cta">Request a Quote</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Certified Nutra Labs</h4>
              <p>Premium nutraceutical manufacturing with NSF GMP certification.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Custom Formulation</li>
                <li>Private Label</li>
                <li>Contract Manufacturing</li>
                <li>Quality Testing</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@certifiednutralabs.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Certified Nutra Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
