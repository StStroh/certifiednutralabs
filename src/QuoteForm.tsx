import { Link } from 'react-router-dom'

function QuoteForm() {
  return (
    <div>
      <header className="form-header">
        <div className="form-header-content">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h2>Certified Nutra Labs</h2>
        </div>
      </header>
      <div className="contact-form-container">
        <div className="contact-form-card">
          <h1>Request a Quote</h1>
          <p className="subtitle">Tell us about your project and we'll get back to you with a customized quote!</p>

        <form name="quote-request" method="POST" action="/thank-you" data-netlify="true">
          <input type="hidden" name="form-name" value="quote-request" />
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectType">Service Type</label>
            <select
              id="projectType"
              name="projectType"
            >
              <option value="">Select a service</option>
              <option value="custom-formulation">Custom Formulation</option>
              <option value="private-label">Private Label Manufacturing</option>
              <option value="contract-manufacturing">Contract Manufacturing</option>
              <option value="packaging">Packaging Solutions</option>
              <option value="quality-testing">Quality Testing</option>
              <option value="consulting">Regulatory Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Expected Order Quantity</label>
            <select
              id="quantity"
              name="quantity"
            >
              <option value="">Select quantity range</option>
              <option value="under-1k">Under 1,000 units</option>
              <option value="1k-5k">1,000 - 5,000 units</option>
              <option value="5k-10k">5,000 - 10,000 units</option>
              <option value="10k-50k">10,000 - 50,000 units</option>
              <option value="50k-plus">50,000+ units</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project..."
            />
          </div>

          <button type="submit">
            Request Quote
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default QuoteForm
