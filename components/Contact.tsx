"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { LuChevronsUp } from "react-icons/lu";
import Link from "../node_modules/next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name: null | string;
    email: null | string;
    subject: null | string;
    message: null | string;
  }>({ name: null, email: null, subject: null, message: null });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, subject, message]);

  const validateForm = () => {
    let errors: {
      name: null | string;
      email: null | string;
      subject: null | string;
      message: null | string;
    } = { name: null, email: null, subject: null, message: null };
    let error_num = 0;

    if (!name) {
      errors.name = "Name is required.";
      error_num += 1;
    } else if (name.length > 35) {
      errors.name = "Name is too long!";
      error_num += 1;
    }

    if (!email) {
      errors.email = "Email is required.";
      error_num += 1;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
      error_num += 1;
    }

    if (!subject) {
      errors.subject = "Subject is required.";
      error_num += 1;
    } else if (subject.length > 40) {
      errors.subject = "Subject is a bit too long...";
      error_num += 1;
    }

    if (!message) {
      errors.message = "The message is empty!";
      error_num += 1;
    }

    setErrors(errors);
    setIsFormValid(error_num === 0);
  };

  const handleSubmit = (e: any) => {
    setIsSubmitting(true);
    e.preventDefault();
    let data = {
      name,
      phone,
      email,
      subject,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setIsSubmitting(false);
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success("Message sent successfully! Thank you!", {
          position: "bottom-right",
        });
      } else {
        setIsSubmitting(false);
        toast.error("Something went wrong! Try again later.", {
          position: "bottom-right",
        });
      }
    });
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <ToastContainer autoClose={10000} />
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-[#602aaa]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <img
                  className="rounded-xl duration-300 ease-in"
                  src="https://www.articlecity.com/wp-content/uploads/2019/07/4feb92a93da79876ad1530e8da34bff4.jpeg"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Phillip Kim</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  Let&apos;s work together! I&apos;m happy to talk about full
                  time positions. I&apos;m also happy to provide my full CV if
                  needed.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href={"https://www.linkedin.com/in/phillip-kim-1001731bb/"}
                  >
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href={"https://github.com/kbu34/"}>
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href={"mailto:phillipkim156@gmail.com"}>
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href={"/#about"}>
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <BsPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className={
                        errors.name
                          ? "flex rounded-lg border-2 border-red-200 p-3"
                          : "flex rounded-lg border-2 border-gray-300 p-3"
                      }
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    {errors.name && (
                      <p className="py-2 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className={
                      errors.email
                        ? "flex rounded-lg border-2 border-red-200 p-3"
                        : "flex rounded-lg border-2 border-gray-300 p-3"
                    }
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors.email && (
                    <p className="py-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className={
                      errors.subject
                        ? "flex rounded-lg border-2 border-red-200 p-3"
                        : "flex rounded-lg border-2 border-gray-300 p-3"
                    }
                    type="text"
                    placeholder="Subject of Matter"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  {errors.subject && (
                    <p className="py-2 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className={
                      errors.message
                        ? "rounded-lg border-2 border-red-200  p-3"
                        : "rounded-lg border-2 border-gray-300  p-3"
                    }
                    rows={10}
                    placeholder="Your message goes here..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  {errors.message && (
                    <p className="py-2 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  className={
                    isFormValid && !isSubmitting
                      ? "mt-4 w-full p-4 text-gray-100"
                      : "mt-4 w-full from-[#a7a5d4] to-[#a6bff7] p-4 text-gray-600"
                  }
                  disabled={!isFormValid || isSubmitting}
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <LuChevronsUp className="text-[#602aaa]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
