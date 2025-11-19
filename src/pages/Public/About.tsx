const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          আমাদের সম্পর্কে জানুন
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
          Pailes Care প্রাকৃতিক উপাদানভিত্তিক সমাধানের মাধ্যমে পাইলস, ফিশার ও
          ফিস্টুলার মতো দীর্ঘদিনের কষ্টকে সহজ, নিরাপদ ও কার্যকরভাবে কমাতে কাজ
          করে। আমরা মানুষকে ভেতর থেকে সুস্থ করে দীর্ঘমেয়াদি আরাম দিতে
          প্রতিশ্রুতিবদ্ধ।
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            আমাদের মিশন
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            আমাদের লক্ষ্য হলো বৈজ্ঞানিকভাবে পরীক্ষিত হারবাল ফর্মুলার মাধ্যমে
            মানুষের দীর্ঘস্থায়ী রেক্টাল সমস্যা সহজভাবে সমাধান করা। সুবিধাজনক
            সেবা ও বিশ্বাসযোগ্য ফলাফলের মাধ্যমে প্রতিটি গ্রাহকের জীবনে স্বস্তি
            ফিরিয়ে আনা।
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            আমাদের ভিশন
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            বাংলাদেশে পাইলস ও রেক্টাল হেলথ কেয়ারে সবচেয়ে নির্ভরযোগ্য হারবাল
            ব্র্যান্ড হিসেবে প্রতিষ্ঠিত হওয়া আমাদের স্বপ্ন। ভবিষ্যতে আরও
            উদ্ভাবনী, নিরাপদ এবং মানুষের জীবনমান উন্নতকারী প্রোডাক্ট তৈরি করাই
            আমাদের লক্ষ্য।
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-10">
          কেন আমাদের থেকে প্রোডাক্ট নিবেন?
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "বিশ্বস্ত ও নিরাপদ",
              desc: "শরীরের সংবেদনশীল সমস্যার জন্য আমরা দিচ্ছি প্রাকৃতিক ও নিরাপদ সমাধান।",
            },
            {
              title: "দ্রুত কার্যকারিতা",
              desc: "৭–১০ দিনের মধ্যেই ব্যথা, জ্বালাপোড়া ও রক্তপাতের উন্নতি অনুভব করতে পারবেন।",
            },
            {
              title: "প্রাকৃতিক উপাদানে তৈরি",
              desc: "কোনো ক্ষতিকারক কেমিক্যাল ছাড়াই হারবাল উপাদানে তৈরি, ফলে পার্শ্বপ্রতিক্রিয়ার ঝুঁকি কম।",
            },
            {
              title: "সমস্যার মূল কারণেই কাজ করে",
              desc: "শুধু উপসর্গ না, বরং টক্সিন, প্রদাহ ও ভেতরের ক্ষতের উন্নতিতে গভীরভাবে কাজ করে।",
            },
            {
              title: "Cash on Delivery সুবিধা",
              desc: "প্রডাক্ট হাতে পাওয়ার পরই পেমেন্ট—কোনো প্রি-পেমেন্ট বা ঝামেলা নেই।",
            },
            {
              title: "দেশব্যাপী ডেলিভারি",
              desc: "বাংলাদেশের যে কোনো জায়গায় ১–৩ দিনের মধ্যেই প্রডাক্ট পৌঁছে যায়।",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-base  text-gray-800 dark:text-gray-100 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
