import { motion } from "framer-motion";

const features = [
  {
    title: "তাৎক্ষণিক উপশম",
    desc: "যখনই ব্যথা, জ্বালাপোড়া বা অস্বস্তি শুরু হয়—আমাদের ফর্মুলা দ্রুত কাজ শুরু করে। কয়েক দিনের মধ্যেই মিলবে টের পাওয়া উপশম।",
    img: "https://pathao.com/wp-content/uploads/2018/12/Express-Standard-Delivery.png",
  },
  {
    title: "নিরাপদ ও প্রাকৃতিক উপাদান",
    desc: "শরীরের ভেতরের প্রদাহ কমাতে এবং টক্সিন পরিষ্কার করতে সাহায্য করে প্রাকৃতিক উপাদানের মিশ্রণ। কোনো পার্শ্বপ্রতিক্রিয়া ছাড়াই ধীরে ধীরে ঠিক করে ভিতরের সমস্যা।",
    img: "https://pathao.com/wp-content/uploads/2018/12/Cash-on-Delivery.png",
  },
  {
    title: "স্থায়ী সমাধানের পথে",
    desc: "শুধু সাময়িক আরাম না—ভেতরের ক্ষত শুকানো, রক্তক্ষরণ কমানো এমনকি ফিশার ও ফিস্টুলার মতো সমস্যার গভীর স্থানে কাজ করে দীর্ঘমেয়াদি উন্নতি আনে।",
    img: "https://pathao.com/wp-content/uploads/2018/12/Nationwide-delivery.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="space-y-4 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            {/* <img
              src={feat.img}
              alt={feat.title}
              className="w-28 h-20 mx-auto"
            /> */}
            <h3 className="font-bold text-lg">{feat.title}</h3>
            <p className="text-gray-600 text-sm">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
