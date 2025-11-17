const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          About <span style={{ color: "#e83330" }}>ParcelXpress</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Simplifying parcel deliveries with speed, reliability, and technology.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To make parcel delivery seamless, affordable, and accessible for
            businesses and individuals. We ensure every parcel reaches its
            destination on time, every time.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To become the most trusted delivery partner in the country,
            revolutionizing last-mile logistics with innovation and technology.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-10">
          Why Choose Us?
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Fast & Reliable",
              desc: "Your parcels delivered safely and on time, every time.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Stay updated with live parcel tracking at every step.",
            },
            {
              title: "Affordable Pricing",
              desc: "Transparent pricing designed to suit everyone’s needs.",
            },
            {
              title: "Secure Handling",
              desc: "We prioritize safety to ensure every parcel arrives intact.",
            },
            {
              title: "Nationwide Coverage",
              desc: "Deliveries available across major cities and towns.",
            },
            {
              title: "Customer Support",
              desc: "Dedicated support team to help you 24/7.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center bg-[#e83330] text-white py-10 px-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-3">
          Ready to experience hassle-free delivery?
        </h3>
        <p className="mb-6">
          Join thousands of happy customers who trust ParcelXpress every day.
        </p>
        <button className="bg-white text-[#e83330] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default About;
