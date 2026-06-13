import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const reviews = [
  {
    name: 'Katherine Nix',
    stars: 5,
    text: 'Our hot water heater went out and we hired Wilsonville HVAC Pros to replace it. They also recommended we upgrade our furnace — so glad we did. This winter has been very cold and the new furnace is doing a great job. Highly recommend.',
  },
  {
    name: 'Ruby Bennett',
    stars: 5,
    text: 'Our furnace died a few days ago with winter setting in and temperatures dropping fast. Their pricing and availability met our needs perfectly. Couldn\'t be happier with how quickly they came out.',
  },
  {
    name: 'Richard Blake',
    stars: 5,
    text: 'I had a great experience purchasing a new furnace. The price was very reasonable and there was no hard sell. I worked with Jack to get an estimate — he answered all my questions clearly and thoroughly.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <div className="trust-badges">
              <span className="trust-badge">🎖 Veteran-Owned</span>
              <span className="trust-badge">♀ Women-Owned</span>
            </div>
            <h1>Wilsonville's HVAC experts, day or night.</h1>
            <p className="hero-sub">
              Furnace repair, AC installation, water heaters, and more — for homes and businesses across Wilsonville and the greater Portland metro. Available 24/7, including emergencies.
            </p>
            <div className="hero-actions">
              <a href="tel:5036789214" className="btn-primary">Call (503) 678-9214</a>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
            <div className="hero-meta">
              <span className="stars">★★★★★</span>
              <span>5.0 · 6 reviews on Google</span>
              <span className="dot">·</span>
              <span>Open 24/7</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="contact-card-hero">
              <div className="emergency-banner">🚨 24/7 Emergency Service</div>
              <h3>Call or Schedule</h3>
              <a href="tel:5036789214" className="btn-primary full-width call-big">(503) 678-9214</a>
              <div className="hours-divider" />
              <table className="hours-table">
                <tbody>
                  <tr><td>Monday – Sunday</td><td>Open 24 Hours</td></tr>
                  <tr><td>Emergency calls</td><td>Always available</td></tr>
                </tbody>
              </table>
              <div className="hours-divider" />
              <p className="service-area-note">📍 Serving Wilsonville, OR and surrounding communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us strip */}
      <section className="why-strip">
        <div className="container why-grid">
          {[
            { icon: '⚡', label: 'Fast Response', desc: 'Same-day and emergency service available around the clock' },
            { icon: '💰', label: 'Fair Pricing', desc: 'Transparent quotes, no hard sell — just honest recommendations' },
            { icon: '🏠', label: 'Residential & Commercial', desc: 'We work with homes and businesses of all sizes' },
            { icon: '📅', label: 'Since 2011', desc: 'Over a decade of trusted HVAC service in the Wilsonville area' },
          ].map((w) => (
            <div key={w.label} className="why-item">
              <span className="why-icon">{w.icon}</span>
              <strong>{w.label}</strong>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services snapshot */}
      <section className="services-snap section">
        <div className="container">
          <p className="section-label">What we do</p>
          <h2>Heating, cooling, and everything in between</h2>
          <div className="service-grid">
            {[
              { icon: '🔥', title: 'Furnace Repair & Installation', desc: 'Diagnose and fix furnace failures fast, or install a new high-efficiency unit.' },
              { icon: '❄️', title: 'Air Conditioning', desc: 'AC repair, replacement, and new installations for home and commercial comfort.' },
              { icon: '💧', title: 'Water Heater Services', desc: 'Hot water heater replacement and repair — traditional and tankless systems.' },
              { icon: '🌡', title: 'Heat Pumps', desc: 'Year-round comfort with energy-efficient heat pump installation and service.' },
              { icon: '🔧', title: 'HVAC Maintenance', desc: 'Seasonal tune-ups and inspections to keep your system running at peak efficiency.' },
              { icon: '🏢', title: 'Commercial HVAC', desc: 'Full-service HVAC solutions for commercial properties of all sizes.' },
            ].map((s) => (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-outline">See full service list</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section section">
        <div className="container">
          <p className="section-label">What people say</p>
          <h2>5.0 stars from our Wilsonville customers</h2>
          <div className="review-grid">
            {reviews.map((r) => (
              <div key={r.name} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">"{r.text}"</p>
                <p className="review-name">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2>Heating or cooling problem? We're ready now.</h2>
            <p>Available 24/7 for emergency repairs and new installations across Wilsonville, OR.</p>
          </div>
          <a href="tel:5036789214" className="btn-primary btn-large">Call (503) 678-9214</a>
        </div>
      </section>
    </>
  )
}
