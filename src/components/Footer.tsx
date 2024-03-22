import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const footerLinks = [
  {
    title: "Product",
    links: ["Privacy", "Time tracking", "Terms", "Recruiting"],
  },
  { title: "Information", links: ["FAQ", "Support", "Cookies"] },
  {
    title: "Company",
    links: ["About us", "Careers", "Contact us", "Event media"],
  },
];

function Footer() {
  return (
    <footer style={{ background: "#724FFF" }} className="m-0">
      <div className="text-white px-10 py-8 flex justify-around">
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col space-y-4">
            <Link className="font-bold" href="/">
              <h2>{section.title}</h2>
            </Link>
            <ul className="list-none space-y-2">
              {section.links.map((link) => (
                <li className="text-sm" key={link}>
                  <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div
          className="rounded-lg flex-col space-y-3 items-center px-8 py-6"
          style={{ background: "#DED5FF" }}
        >
          <h1 className="text-black font-bold">Subscribe</h1>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="ml-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
              {<FaArrowRight />}
            </button>
          </div>
          <div className="text-sm text-black">
            <p>
              {" "}
              Hello, we are Uventlo. Our goal is to translate the positive{" "}
            </p>
            <p> effects from revolutionizing how companies engage with </p>
            <p> their clients & their team.</p>
          </div>
        </div>
      </div>
      <hr
        className="w-60 mx-auto border-t-2 border-white"
        style={{ width: "85%", margin: "auto" }}
      />
      <div className="flex justify-around p-6">
        <Image
          src="/assets/icons/Logo2.png"
          alt="Logo"
          width={140}
          height={60}
        />
        <div className="flex justify-center space-x-6 mt-4">
          {[
            {
              href: "https://www.instagram.com",
              icon: <FaInstagram className="text-white text-3xl" />,
            },
            {
              href: "https://www.facebook.com",
              icon: <FaFacebook className="text-white text-3xl" />,
            },
            {
              href: "https://www.linkedin.com",
              icon: <FaLinkedin className="text-white text-3xl" />,
            },
            {
              href: "https://www.twitter.com",
              icon: <FaTwitter className="text-white text-3xl" />,
            },
            {
              href: "https://www.youtube.com",
              icon: <FaYoutube className="text-white text-3xl" />,
            },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
