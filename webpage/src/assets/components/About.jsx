import React from 'react'

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-20 md:py-32 z-10 rounded-t-3xl shadow-2xl -mt-10 relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-30 text-center leading-tight">
        JRC Palladio – Greco Roman Luxury Villas in Sarjapur
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Left Text Section */}
        <div className="text-lg md:text-2xl max-w-2xl space-y-8 text-gray-300 text-justify">
          <p>
            JRC Palladio is a luxury 4 BHK villa project in Sarjapur, thoughtfully inspired by
            Greco-Roman architecture and the timeless grace of the Renaissance era. These classical
            homes in Bangalore are crafted for discerning homeowners who appreciate heritage,
            symmetry, and high design. With grand facades, double-height ceilings, and meticulously
            detailed interiors, each residence is an architectural landmark in its own right.
          </p>

          <p>
            Nestled within a 2,50,000 sqft low-density community, Palladio offers spacious villa
            plans, private courtyards, and wide internal roads. With no UDS and full plot ownership,
            residents truly own the plot they live on — a rare offering in the city. The project
            features a 25,000 sqft grand clubhouse with resort-style amenities like a swimming pool,
            spa, indoor sports zones, fitness center, guest suites, and more, elevating the
            experience of everyday living.
          </p>
        </div>

        {/* Right Image Section */}
        <img
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          src="https://www.constructionweekonline.in/cloud/2025/10/07/Indian-real-estate-redefined-through-experiential-living.jpg"
          alt="Luxury Villa"
        />
      </div>
    </section>
  )
}

export default About
