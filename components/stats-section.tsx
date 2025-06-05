export function StatsSection() {
  const stats = [
    { value: "120K+", label: "kg CO₂ Saved" },
    { value: "4.9", label: "User Satisfaction" },
    { value: "120+", label: "Partner Businesses" },
    { value: "10K+", label: "Eco Products Sold" },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Impact So Far</h2>
        <p className="text-gray-600 md:text-xl">
          Together with our users and partners, we're making a measurable difference for our planet.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
