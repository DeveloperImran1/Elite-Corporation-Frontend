import { motion } from "framer-motion";

const elements = [
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "লজ্জাবতী",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "জ্যৈষ্ঠ মধু",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "জার্মানী লতা",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "হার্তুকী",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "আমলকী",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "সোনাপাতা",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "মাশরুম",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "কালোজিরা",
  },
  {
    image:
      "https://i.ibb.co.com/dJjksrXG/82195563-1326076587585019-2103686754086158336-n.jpg",
    name: "মিঠাজিরা",
  },
];

export default function Upadan() {
  return (
    <section className="lg:mt-[80px] md:[60px] mt-[40px]  text-center ">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        প্রাকৃতিক ৪৯ উপাদানের শক্তিশালী সমন্বয়
      </h2>
      <p className="text-base max-w-[80%] md:max-w-[70%] w-full mx-auto  mb-8">
        এই প্রডাক্টটি তৈরি হয়েছে লজ্জাবতী, জ্যৈষ্ঠ মধু, জার্মানী লতা, হার্তুকী,
        আমলকী, সোনাপাতা, মাশরুম, কালোজিরা, মিঠাজিরা সহ মোট ৪৯টি মূল্যবান ভেষজ
        উপাদানের বিশেষ মিশ্রণে। সম্পূর্ণ প্রাকৃতিক উপাদান হওয়ায় এতে কোনো সাইড
        ইফেক্ট বা পার্শ্বপ্রতিক্রিয়ার ঝুঁকি নেই—শরীরের ভেতর থেকে ধীরে ধীরে আরাম
        ও উন্নতি এনে দেয়।
      </p>
      <div className="flex flex-wrap justify-between md:justify-center  gap-4 md:gap-3">
        {elements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white md:p-2 p-1 rounded-xl shadow-md w-28 md:min-w-36 lg:w-44 flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
          >
            <img className="rounded" src={item.image} alt={item.name} />
            <span className="text-sm font-medium">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
