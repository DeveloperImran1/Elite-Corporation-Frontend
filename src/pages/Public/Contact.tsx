const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Contact <span style={{ color: "#e83330" }}>ParcelXpress</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We’d love to hear from you! Reach out for support, feedback, or
          inquiries.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Phone
          </h3>
          <p className="text-gray-600 dark:text-gray-300">+880 1234 567 890</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Email
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            support@parcelxpress.com
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Address
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            123 Main Street, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Send Us a Message
        </h3>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#e83330] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#e83330] transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#e83330] transition"
          ></textarea>
          <button
            type="submit"
            className="bg-[#e83330] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
