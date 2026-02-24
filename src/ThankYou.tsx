import { Link } from 'react-router-dom'
import './ThankYou.css'

function ThankYou() {
  return (
    <div className="contact-form-container">
      <div className="contact-form-card thank-you-card">
        <h1>Thank You — We'll Be in Touch.</h1>
        <p className="subtitle">
          Your quote request has been received. A member of our team will respond within 1 business day.
        </p>

        <div className="button-group">
          <Link to="/" className="btn btn-primary">
            ← Back to Homepage
          </Link>
          <Link to="/" className="btn btn-secondary">
            Request Another Quote
          </Link>
        </div>

        <p className="trust-line">
          NSF GMP & NSF Sport Certified | FDA Registered Facility
        </p>

        <p className="contact-line">
          Questions? Call or text: <a href="tel:+17863705250">(786) 370-5250</a>
        </p>
      </div>
    </div>
  )
}

export default ThankYou
