import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: Services,
})

const serviceCategories = [
  {
    heading: 'Heating',
    items: [
      { name: 'Furnace repair', detail: 'Diagnosis and repair of gas, electric, and oil furnaces — same-day service available' },
      { name: 'Furnace installation', detail: 'New high-efficiency furnace selection and professional installation' },
      { name: 'Heat pump installation & repair', detail: 'Year-round heating and cooling in one energy-efficient system' },
      { name: 'Boiler service', detail: 'Repair and maintenance for residential and commercial boiler systems' },
    ],
  },
  {
    heading: 'Cooling',
    items: [
      { name: 'AC repair', detail: 'Fast diagnosis and repair of central air conditioning systems' },
      { name: 'AC installation', detail: 'New central air conditioning systems sized and installed for your space' },
      { name: 'Ductless mini-split systems', detail: 'Installation and service of ductless heating and cooling units' },
      { name: 'AC tune-up & maintenance', detail: 'Seasonal inspections to maximize efficiency and prevent breakdowns' },
    ],
  },
  {
    heading: 'Water Heaters',
    items: [
      { name: 'Water heater replacement', detail: 'Traditional tank and tankless water heater installation' },
      { name: 'Water heater repair', detail: 'Diagnosis and repair of failing or underperforming water heaters' },
      { name: 'Tankless upgrade', detail: 'Switch from a tank system to an on-demand tankless unit for energy savings' },
    ],
  },
  {
    heading: 'Maintenance & Commercial',
    items: [
      { name: 'HVAC system tune-up', detail: 'Full seasonal inspection, cleaning, and performance check' },
      { name: 'Filter replacement & air quality', detail: 'Filter changes and indoor air quality assessments' },
      { name: 'Commercial HVAC service', detail: 'Full-service heating and cooling for commercial properties of all sizes' },
      { name: '24/7 emergency repair', detail: 'No extra charge to call after hours — we\'re always available' },
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow"><Link to="/">Home</Link> / Services</p>
          <h1>Our Services</h1>
          <p className="page-hero-sub">
            From a broken furnace on a cold night to a full commercial HVAC installation — we handle it all, 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-full">
            {serviceCategories.map((cat) => (
              <div key={cat.heading} className="service-category">
                <h2 className="cat-heading">{cat.heading}</h2>
                <div className="cat-items">
                  {cat.items.map((item) => (
                    <div key={item.name} className="cat-item">
                      <div className="cat-item-name">{item.name}</div>
                      <div className="cat-item-detail">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <h3>Honest pricing, no pressure</h3>
            <p>We provide a clear estimate before any work begins. Customers consistently note our rates are fair and that there's no hard sell — just honest recommendations for what your system actually needs.</p>
            <a href="tel:5036789214" className="btn-primary">Call for a free estimate: (503) 678-9214</a>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2>Available 24/7 — including emergencies.</h2>
            <p>Don't wait in the cold. Call us any time and we'll be there.</p>
          </div>
          <a href="tel:5036789214" className="btn-primary btn-large">Call Now</a>
        </div>
      </section>
    </>
  )
}
