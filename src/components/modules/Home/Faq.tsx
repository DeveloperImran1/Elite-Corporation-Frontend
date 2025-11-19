import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: 1,
    title: "টক্সিন পরিষ্কার করা শুরু করে?",
    content:
      "প্রথমেই শরীরের ভেতর জমে থাকা ক্ষতিকারক টক্সিনকে ধীরে ধীরে বের করে দেয়, যাতে ভেতরের প্রদাহ কমতে থাকে।",
  },
  {
    id: 2,
    title: "হজম শক্তি উন্নত করে?",
    content:
      "গ্যাস্ট্রিক ও বদহজমের সমস্যা কমিয়ে পেটের ভেতরের চাপ হালকা করে, যা পাইলসের ব্যথা ও জ্বালাপোড়া কমাতে সাহায্য করে।",
  },
  {
    id: 3,
    title: "ভেতরের ক্ষত শুকাতে সাহায্য করে?",
    content:
      "মলদ্বারের ভেতরের ঘা বা ফোলাভাব দ্রুত শুকিয়ে যায়, ফলে ব্যথা ক্রমেই কমে আসে।",
  },
  {
    id: 4,
    title: "স্টুল সফট করে?",
    content:
      "মাত্র কয়েক দিনের মধ্যে স্টুল নরম হয়ে যায়, টয়লেট করার সময় কষ্ট, চাপ, রক্তক্ষরণ — সবই দ্রুত কমে যায়।",
  },
  {
    id: 5,
    title: "জ্বালাপোড়া ও ব্যথা দূর করে?",
    content:
      "৭–৮ দিনের মধ্যে জ্বালাপোড়া, ব্যথা, রক্তপাতের মতো উপসর্গগুলো উল্লেখযোগ্যভাবে কমে বা একেবারে চলে যায়।",
  },
  {
    id: 6,
    title: "এলান ফিশার ও ফিস্টুলার উন্নতি ঘটায়?",
    content:
      "নিয়মিত ব্যবহারে ফিশার ও ফিস্টুলার মতো দীর্ঘস্থায়ী সমস্যারও উন্নতি হতে থাকে।",
  },
  {
    id: 7,
    title: "আমাদের ডেলিভারি সিস্টেম কেমন?",
    content:
      "আমরা শুধুমাত্র হ্যান্ড-অন-ক্যাশ (Cash on Delivery) সেবা দিই। প্রডাক্ট আপনার ঠিকানায় পৌঁছালে নগদ অর্থ গ্রহণ করা হয়।",
  },
  {
    id: 8,
    title: "প্রডাক্ট কবে পাবো?",
    content:
      "অর্ডার দেওয়ার পর সাধারণত ১–৩ কার্যদিবসের মধ্যে প্রডাক্ট আপনার ঠিকানায় পৌঁছে যায়।",
  },
  {
    id: 9,
    title: "কিভাবে পেমেন্ট করতে হবে?",
    content:
      "প্রডাক্ট হাতে পেয়ে সরাসরি ডেলিভারি পার্সনের কাছে নগদ অর্থ প্রদান করতে হবে। কোন প্রি-পেমেন্ট বা অনলাইন পেমেন্ট নেই।",
  },
  {
    id: 10,
    title: "কোনো অতিরিক্ত চার্জ আছে কি?",
    content:
      "না, প্রোডাক্ট মূল্যের সাথে কোনো অতিরিক্ত চার্জ নেই। ডেলিভারি চার্জ প্রযোজ্য হলে তা অর্ডার কনফার্মেশনের সময় দেখানো হবে।",
  },
  {
    id: 11,
    title: "ডেলিভারি ঠিকানা পরিবর্তন করা যাবে কি?",
    content:
      "অর্ডার দেওয়ার পর ডেলিভারি ঠিকানা পরিবর্তন করতে হলে আমাদের কাস্টমার কেয়ার সাথে যোগাযোগ করতে হবে। তবে প্রডাক্ট পৌঁছানোর আগে পরিবর্তন সম্ভব।",
  },
];

export default function Faq() {
  return (
    <>
      <section className="max-w-full  mx-auto  pt-16">
        <h2 className="text-2xl md:text-3xl text-left font-bold mb-8">
          Frequently Asked Question
        </h2>
      </section>
      <section className=" grid md:grid-cols-2 gap-10 justify-center">
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="3"
          >
            {items.map((item) => (
              <AccordionItem
                value={String(item.id)}
                key={item.id}
                className="py-2"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className=" focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                    {item.title}
                    <PlusIcon
                      size={16}
                      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-muted-foreground pb-2 text-left">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex h-[600px] "
        >
          <img
            src="https://i.postimg.cc/Y0kjdYfY/team3.webp"
            alt="App Mockup"
            className="w-full drop-shadow-xl rounded-2xl h-auto object-cover"
          />
        </motion.div>
      </section>
    </>
  );
}
