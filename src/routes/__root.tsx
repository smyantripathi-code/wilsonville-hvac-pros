import { HeadContent, Link, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Wilsonville HVAC Pros — Heating & Cooling, Wilsonville OR' },
      { name: 'description', content: 'Veteran & women-owned HVAC contractor in Wilsonville, OR. Furnace repair, AC, installations, and 24/7 emergency service. Call (503) 678-9214.' },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  ),
  component: () => <Outlet />,
})

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-brand">
          <span className="brand-icon">🌡</span>
          <span>Wilsonville HVAC Pros</span>
        </Link>
        <nav className="nav-links">
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="tel:5036789214" className="btn-primary nav-cta">Call (503) 678-9214</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <p className="footer-brand">🌡 Wilsonville HVAC Pros</p>
          <p className="footer-tagline">Veteran &amp; women-owned. Serving Wilsonville and the greater Portland metro since 2011.</p>
          <div className="badges">
            <span className="badge">🎖 Veteran-Owned</span>
            <span className="badge">♀ Women-Owned</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          <p>Open 24 Hours, 7 Days a Week</p>
          <p>Emergency service always available.</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Wilsonville, OR 97070</p>
          <p><a href="tel:5036789214">(503) 678-9214</a></p>
          <p>Serving Wilsonville &amp; surrounding areas</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wilsonville HVAC Pros. All rights reserved.</p>
      </div>
    </footer>
  )
}
