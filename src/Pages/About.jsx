import React, { useEffect, useState } from "react";





const timelineData = [
  {
    year: "2015",
    title: "A rise to the top in the Nordics",
    description:
      "It became the number one checkout in the Nordics, capturing 40% of Sweden’s market. Every module is tested, refined, and perfected to drive performance and conversion.",
    position: "left",
  },
  {
    year: "2012",
    title: "A checkout revolution begins",
    description:
      "Klarna launches an all-in-one checkout, redefining online payments with address pre-fill and flexible payment options. A seamless experience that sets a new industry standard.",
    position: "right",
  },
  // You can add more items here
];

const About = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector("#timeline");
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of timeline is in view
      const scrollProgress =
        Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);

      setLineHeight(scrollProgress * 100); // percentage
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-left py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">The WALLEX story</h1>
        <p className="mb-4">
          WALLEX became an independent company in 2024 after Klarna Checkout earned
          universal acclaim—so much so that its team knew it deserved a venture of its
          own. Now, as Europe’s leading checkout solution, WALLEX has grown to over 90
          experts, all committed to delivering a checkout experience tailored to every
          business’s unique needs.
        </p>
        <p className="mb-4">
          With a merchant-first approach, WALLEX offers unmatched control, flexibility,
          and scalability—empowering businesses to grow on their own terms, without
          compromises or being locked into a closed-loop solution.
        </p>
        <p>
          From fast-growing brands to global enterprises, over 24,000 businesses
          worldwide trust WALLEX to power their checkout.
        </p>
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative max-w-5xl mx-auto py-16 px-4">
        {/* Full gray line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full rounded"></div>
        {/* Progress line */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-black rounded transition-all duration-300"
          style={{ height: `${lineHeight}%` }}
        ></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center mb-16  ${
              item.position === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div className={`w-1/2  ${item.position === "left" ? "pr-3 text-right" : "pl-3"}`}>
              <div className="bg-white py-6 px-2 rounded-2xl shadow-lg ">
                <h3 className="text-gray-500 font-bold">{item.year}</h3>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>

            {/* Circle marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-gray-300 rounded-full z-10"></div>
          </div>
        ))}
      </section>
    </div>
  );
};







export default About;
