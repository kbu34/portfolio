"use client";
import React, { useEffect, useState } from "react";
import Link from "../node_modules/next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { linksData } from "@/lib/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed z-[100] h-20 w-full shadow-xl"
          : "fixed z-[100] h-20 w-full"
      }
    >
      <div className="flex h-full w-full items-center justify-end px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-5 rounded-xl px-3 py-2 text-sm uppercase transition duration-500 hover:bg-[#a7a5d4]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-5 rounded-xl px-3 py-2 text-sm uppercase transition duration-500 hover:bg-[#a7a5d4]">
                About
              </li>
            </Link>
            <Link href="/#experience">
              <li className="ml-5 rounded-xl px-3 py-2 text-sm uppercase transition duration-500 hover:bg-[#a7a5d4]">
                Experience
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-5 rounded-xl px-3 py-2 text-sm uppercase transition duration-500 hover:bg-[#a7a5d4]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-5 rounded-xl px-3 py-2 text-sm uppercase transition duration-500 hover:bg-[#a7a5d4]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-5 rounded-xl px-3 py-2 text-sm uppercase transition duration-500 hover:bg-[#a7a5d4]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "fixed left-0 top-0 h-screen w-full bg-black/75 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div
              onClick={handleNav}
              className="w-10 cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="my-8 border-b border-gray-300">
            <p className="w-[85%] py-4 md:w-[90%]">Welcome to my website!</p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#experience">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#561653]">
                Connect
              </p>
              <div>
                <ul className="item-center my-4 flex w-full justify-between sm:w-[80%]">
                  {linksData.map((data, _) => (
                    <li key={""}>
                      <div className="">
                        <Link href={data.link}>
                          <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                            {data.symbol}
                          </div>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
