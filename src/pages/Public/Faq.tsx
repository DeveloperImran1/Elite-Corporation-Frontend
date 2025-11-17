import FaqComponent from "@/components/modules/Home/Faq";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section>
      <FaqComponent></FaqComponent>

      {/* New Section: Contact CTA */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center rounded-2xl max-w-4xl mx-auto mt-10">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Still Have Questions?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Our support team is ready to help you. Get in touch and we’ll answer
          all your queries.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#e83330] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-red-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </section>
  );
};

export default Faq;
