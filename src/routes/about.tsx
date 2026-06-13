import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

export default function About() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow"><Link to="/">Home</Link> / About</p>
          <h1>About Us</h1>
          <p className="page-hero-sub">
            A veteran &amp; women-owned HVAC company serving Wilsonville and the greater Portland metro since 2011.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-story">
            <h2>Built on honest work and fair pricing</h2>
            <p>
              Wilsonville HVAC Pros has been serving homeowners and businesses in the Wilsonville area since 2011. What started as a small operation has grown into a close-knit team of knowledgeable professionals — all dedicated to doing the job right the first time.
            </p>
            <p>
              We work with both residential homes and commercial properties, handling everything from emergency furnace repairs to full system installations. When you call us, you get experienced technicians who will treat your HVAC system like it was in their own home.
            </p>
            <p>
              Our pricing is straightforward and transparent — we give you an estimate before any work begins and we don't push unnecessary upgrades. When we do recommend something, like upgrading an aging furnace before winter sets in, it's because it genuinely makes sense for you.
            </p>

            <blockquote className="pull-quote">
              "I worked with Jack to get an estimate. He answered all of my questions clearly and in detail — no hard sell, just honest advice."
              <cite>— Richard Blake, Google Review</cite>
            </blockquote>

            <h2>Proud to serve our community</h2>
            <p>
              As a veteran &amp; women-owned business, we bring a sense of duty and integrity to every job. We're available 24 hours a day, 7 days a week — because heating and cooling emergencies don't wait for business hours.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="contact-card">
              <h3>Contact Us</h3>
              <div className="contact-row">
                <span className="contact-label">Phone</span>
                <a href="tel:5036789214">(503) 678-9214</a>
              </div>
              <div className="contact-row">
                <span className="contact-label">Hours</span>
                <span>Open 24/7</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Service Area</span>
                <span>Wilsonville, OR and surrounding communities</span>
              </div>
              <div className="hours-divider" />
              <a href="tel:5036789214" className="btn-primary full-width">Call Now</a>
            </div>

            <div className="rating-card">
              <div className="rating-number">5.0</div>
              <div className="rating-stars">★★★★★</div>
              <p>6 reviews on Google</p>
              <a
                href="https://www.google.com/maps/search/Wilsonville+HVAC+Pros+Wilsonville+OR+503-678-9214"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline full-width"
              >
                Read Reviews
              </a>
            </div>

            <div className="owned-card">
              <div className="owned-row">
                <span className="owned-icon">🎖</span>
                <div>
                  <strong>Veteran-Owned</strong>
                  <p>Proudly operated by a U.S. military veteran</p>
                </div>
              </div>
              <div className="owned-row">
                <span className="owned-icon">♀</span>
                <div>
                  <strong>Women-Owned</strong>
                  <p>A certified women-owned small business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
