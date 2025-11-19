import FaqComponent from "@/components/modules/Home/Faq";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section>
      <FaqComponent></FaqComponent>

      {/* New Section: Contact CTA */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center rounded-2xl max-w-4xl mx-auto mt-10">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          এখনো কি কোনো প্রশ্ন আছে?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          আমাদের সাপোর্ট টিম সবসময় প্রস্তুত। যোগাযোগ করুন, আপনার সব প্রশ্নের
          উত্তর আমরা দিয়ে দেব।
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-[#00bffe] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#299ad6] transition"
        >
          Contact Us
        </Link>
      </section>
    </section>
  );
};

export default Faq;
