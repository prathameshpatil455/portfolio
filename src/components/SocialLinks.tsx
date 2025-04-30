import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

interface SocialLink {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
  download?: boolean;
}

const SocialLinks = () => {
  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  const links: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn{" "}
          <FaLinkedin size={30} color={isDarkMode ? "white" : "black"} />
        </>
      ),
      href: "https://www.linkedin.com/in/prathamesh-patil-off9867/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} color={isDarkMode ? "white" : "black"} />
        </>
      ),
      href: "https://github.com/prathameshpatil455",
    },
    {
      id: 3,
      child: (
        <>
          Mail{" "}
          <HiOutlineMail size={30} color={isDarkMode ? "white" : "black"} />
        </>
      ),
      href: "mailto:prathameshpatil1513@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume{" "}
          <BsFillPersonLinesFill
            size={30}
            color={isDarkMode ? "white" : "black"}
          />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] z-50 left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: id * 0.1, duration: 0.5 }}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-lg duration-500 border ${
              isDarkMode
                ? "bg-black text-white border-gray-200"
                : "bg-white text-black border-black"
            } ${style || ""}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target={download ? undefined : "_blank"}
              rel={download ? undefined : "noreferrer"}
            >
              {child}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
