// components/Features.js
import { FiCoffee, FiHome, FiMap, FiStar } from "react-icons/fi";

export default function Features() {
  const features = [
    {
      icon: <FiCoffee className="text-3xl" />,
      title: "Authentic Food",
      description:
        "Savor home-cooked Malaysian meals prepared with local ingredients and traditional recipes.",
    },
    {
      icon: <FiHome className="text-3xl" />,
      title: "Cozy Stays",
      description:
        "Experience comfortable accommodations with authentic Cameron Highlands charm and hospitality.",
    },
    {
      icon: <FiMap className="text-3xl" />,
      title: "Guided Tours",
      description:
        "Discover hidden gems and popular attractions with our knowledgeable local guides.",
    },
    {
      icon: <FiStar className="text-3xl" />,
      title: "Package Deals",
      description:
        "Enjoy curated experiences that combine meals, accommodation, and tours at great value.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Cameron Highlands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of nature, culture, and comfort with Yati
            Kitchen & Home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
