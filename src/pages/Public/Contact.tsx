const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          যোগাযোগ করুন
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          আপনার যেকোনো প্রশ্ন, সমস্যা বা অর্ডার সংশ্লিষ্ট সহায়তার জন্য আমরা
          সবসময় প্রস্তুত। আমাদের সাথে যোগাযোগ করুন আপনার স্বাস্থ্য ও স্বস্তির
          যাত্রায় পাশে থাকতে চাই।
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Phone
          </h3>
          <p className="text-gray-600 dark:text-gray-300">+880 1836-306631</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Email
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            mdbisalhossain924@gmail.com
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Address
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Thakurgaon Sadar, Rangpur
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
