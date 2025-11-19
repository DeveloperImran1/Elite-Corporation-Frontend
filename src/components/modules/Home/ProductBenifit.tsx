import { Link } from "react-router-dom";

const ProductBenefit = () => {
  const content = {
    title: "পাইলস কেয়ার এর উপকারিতা",
    image:
      "https://i.postimg.cc/hjRTLFHC/469591104-122120292050585658-8154222083326413334-n.jpg",
    points: [
      "আপনার মলদ্বারের ভেতর থেকে ক্ষতিকারক টক্সিন বের করে দিবে।",
      "গ্যাস্ট্রিক ও বদহজমে ভূমিকা রাখবে।",
      "ভিতরের ঘা ধীরে ধীরে শুকিয়ে ফেলবে।",
      "আর চার থেকে পাঁচ দিনে টয়লেটে এর ছাপ পরিষ্কার করবে।",
      "জ্বালাপোড়া, ব্যথা, রক্তক্ষরণ হওয়া ৭/৮ দিনের মধ্যে ঠিক হয়ে যাবে।",
      "এলান ফিসার ও ফিস্টুলার মতো সমস্যাকে স্থায়ীভাবে সমাধান করবে।",
      "আপনার টয়লেট পরিষ্কার করবে।",
    ],
  };
  return (
    <section className="w-full mx-auto lg:mt-[80px] md:[60px] mt-[40px]  grid md:grid-cols-2 gap-10 ">
      {/* Text + Bullet Points */}
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl text-left md:text-3xl font-bold">
          {content.title}
        </h2>

        <div className=" relative md:hidden group overflow-hidden rounded-2xl shadow-lg">
          <img
            src={content.image}
            alt="Product"
            className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
        </div>

        <ul className="space-y-4 ">
          {content.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#00bffe] text-base ">➤</span>
              <span className="text-start">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-start">
          <Link
            to="/faq"
            className="px-6 py-3  bg-[#00bffe] text-white rounded-xl shadow-md hover:bg-[#299ad6] hover:shadow-lg transition-all duration-300 "
          >
            আরো জানুন
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className=" hidden md:block relative group overflow-hidden rounded-2xl shadow-lg">
        <img
          src={content.image}
          alt="Product"
          className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default ProductBenefit;
