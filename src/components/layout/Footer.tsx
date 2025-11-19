import React from "react";
import { FaFacebook, FaFacebookMessenger, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Important Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Order now", href: "/order-now" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Review", href: "/" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Help", href: "/contact" },
  //     { name: "Sales", href: "/features" },
  //     { name: "Advertise", href: "/features" },
  //     { name: "Privacy", href: "/faq" },
  //   ],
  // },
];

const defaultSocialLinks = [
  {
    icon: <FaFacebook className="size-5" />,
    href: "https://web.facebook.com/profile.php?id=61567569742685",
    label: "Facebook",
  },
  {
    icon: <FaTwitter className="size-5" />,
    href: "https://web.facebook.com/profile.php?id=61567569742685",
    label: "Twitter",
  },
  {
    icon: <FaFacebookMessenger className="size-5" />,
    href: "https://www.messenger.com/t/61567569742685/",
    label: "Mesenger",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/" },
  { name: "Privacy Policy", href: "/" },
];

const Footer = ({
  logo = {
    url: "/",
    src: "https://i.ibb.co.com/Mxr1CY5z/Logo-removebg.png",
    alt: "logo",
    title: "Elite Corporation",
  },
  sections = defaultSections,
  description = "Our all social media links. Fill free contact us",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Elite Corporation Team all rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <section className="pt-16 md:pt-28 lg:pt-32 ">
      <div className=" ">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start  lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start items-center ">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Link to={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-[50px]"
                />
              </Link>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-left text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <Link to={social.href} aria-label={social.label}>
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2  justify-center lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <Link
            target="_blank"
            to="https://web.facebook.com/imran9066588"
            className="order-2 lg:order-1"
          >
            {copyright}
          </Link>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <Link to={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
