import { motion } from "framer-motion";

// Sample testimonials data
const testimonials = [
  {
    name: "Sara Rahman",
    role: "Small Business Owner",
    comment:
      "ParcelXpress has transformed how I send products to my customers. Fast, reliable, and transparent pricing!",
  },
  {
    name: "Rafiq Ahmed",
    role: "Freelancer",
    comment:
      "I love the real-time tracking feature. Always know where my parcels are, which gives me peace of mind.",
  },
  {
    name: "Tania Chowdhury",
    role: "Customer",
    comment:
      "The support team is amazing! They respond quickly and help me with every query I have.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 lg:px-20 py-16 space-y-32">
      {/* ===== 1. Header Section ===== */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Features of <span style={{ color: "#e83330" }}>ParcelXpress</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the tools and features that make your parcel delivery fast,
          safe, and hassle-free.
        </p>
      </div>

      {/* ===== 2. Key Features / Highlights Section ===== */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Fast & Reliable",
            desc: "Deliveries on time, every time, with guaranteed speed and safety.",
          },
          {
            title: "Real-Time Tracking",
            desc: "Track your parcel at every step, from pickup to delivery.",
          },
          {
            title: "Nationwide Coverage",
            desc: "Deliveries available across major cities and towns.",
          },
          {
            title: "Affordable Pricing",
            desc: "Transparent pricing designed to suit everyone’s needs.",
          },
          {
            title: "Secure Handling",
            desc: "Ensuring your parcels arrive safely and intact.",
          },
          {
            title: "24/7 Customer Support",
            desc: "Get help anytime from our dedicated support team.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ===== 3. Benefits / Why Choose Us ===== */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://pathao.com/wp-content/uploads/2019/02/parcel-new.png"
          alt="Parcel Delivery Illustration"
          className="rounded-2xl shadow-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Why Choose <span style={{ color: "#e83330" }}>ParcelXpress</span>?
          </h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Fastest delivery service in your city and nationwide.</li>
            <li>Easy-to-use dashboard to manage all your parcels.</li>
            <li>Transparent pricing with no hidden charges.</li>
            <li>Real-time tracking and notifications at every step.</li>
            <li>Secure and reliable handling of every parcel.</li>
          </ul>
        </div>
      </div>

      {/* ===== 4. Testimonials / Social Proof ===== */}
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "{testi.comment}"
              </p>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {testi.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testi.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
