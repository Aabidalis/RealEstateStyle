import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Apartment Plan",
      price: "₹49,999",
      description:
        "Perfect for compact apartments or studio flats with essential interior design elements.",
      features: [
        "1BHK Design Consultation",
        "3D Floor Plan & Visualization",
        "Basic Material Suggestions",
        "1 On-Site Visit",
      ],
      popular: false,
    },
    {
      title: "Premium Villa Plan",
      price: "₹1,49,999",
      description:
        "Ideal for luxury villas and duplex homes with premium materials and detailed design.",
      features: [
        "Full Interior + Exterior Design",
        "3D Walkthrough Render",
        "Material & Color Consultancy",
        "3 On-Site Visits",
        "Dedicated Project Manager",
      ],
      popular: true,
    },
    {
      title: "Commercial Plan",
      price: "₹2,49,999",
      description:
        "Tailored for commercial properties, offices, and showrooms with a professional touch.",
      features: [
        "Complete Layout Planning",
        "3D Visualization + Branding",
        "Lighting & Space Optimization",
        "Multiple On-Site Visits",
        "Dedicated Architect Support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Our Pricing Plans
        </h1>
        <p className="text-gray-400 text-lg">
          Select the perfect plan for your real estate project.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-6 md:px-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-[#1a1a1a] rounded-2xl border p-8 w-full md:w-1/3 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/40 ${
              plan.popular ? "border-orange-500" : "border-gray-700"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-bold mb-3 text-white">
              {plan.title}
            </h2>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <p className="text-4xl font-extrabold text-orange-400 mb-6">
              {plan.price}
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <span className="text-orange-400 text-lg mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/40 transition-all">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
