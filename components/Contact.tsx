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
  const [errors, setErrors] = useState<{name: null | string, email: null | string, subject: null | string, message: null | string}>({name: null, email: null, subject: null, message: null});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => { 
    validateForm(); 
  }, [name, email, subject, message]); 

  const validateForm = () => { 
    let errors: {name: null | string, email: null | string, subject: null | string, message: null | string} = {name: null, email: null, subject: null, message: null}; 
    let error_num = 0;

    if (!name) { 
      errors.name = 'Name is required.';
      error_num += 1;
    } else if (name.length > 35) {
      errors.name = 'Name is too long!'
      error_num += 1;
    }

    if (!email) { 
      errors.email = 'Email is required.'; 
      error_num += 1;
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = 'Email is invalid.'; 
      error_num += 1;
    }

    if (!subject) {
      errors.subject = 'Subject is required.';
      error_num += 1;
    } else if (subject.length > 40) {
      errors.subject = 'Subject is a bit too long...'
      error_num += 1;
    }

    if (!message) {
      errors.message = 'The message is empty!'
      error_num += 1;
    }

    setErrors(errors); 
    setIsFormValid(error_num === 0); 
  }; 

  const handleSubmit = (e: any) => { 
    e.preventDefault()
    let data = {
      name,
      phone,
      email,
      subject,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        setName('')
        setPhone('')
        setEmail('')
        setSubject('')
        setMessage('')
        toast.success("Message sent successfully! Thank you!" + process.env.EMAIL_ADDRESS?.length + process.env.EMAIL_PASSWORD?.length + process.env.VERCEL_ENV, {
          position: "bottom-right"
        });
      } else {
        toast.error("Something went wrong! Try again later.", {
          position: "bottom-right"
        })
      }
    })
  }


  return (
    <div id="contact" className="w-full lg:h-screen">
      <ToastContainer autoClose={10000}/>
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#602aaa]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl ease-in duration-300"
                  src="https://www.articlecity.com/wp-content/uploads/2019/07/4feb92a93da79876ad1530e8da34bff4.jpeg"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Phillip Kim</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I&apos;m happy to talk about full time positions. Please
                  contact me. I&apos;m also happy to provide my full CV if
                  needed.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href={"https://www.linkedin.com/in/phillip-kim-1001731bb/"}>
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href={"https://github.com/kbu34/"}>
                    <FaGithub />
                  </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href={"mailto:phillipkim156@gmail.com"}>
                    <AiOutlineMail />
                  </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className={errors.name ? "border-2 rounded-lg p-3 flex border-red-200" : "border-2 rounded-lg p-3 flex border-gray-300"}
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    {errors.name && <p className="text-sm py-2 text-red-500">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
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
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className={errors.email ? "border-2 rounded-lg p-3 flex border-red-200" : "border-2 rounded-lg p-3 flex border-gray-300"}
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors.email && <p className="text-sm py-2 text-red-500">{errors.email}</p>}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className={errors.subject ? "border-2 rounded-lg p-3 flex border-red-200" : "border-2 rounded-lg p-3 flex border-gray-300"}
                    type="text"
                    placeholder="Subject of Matter"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  {errors.subject && <p className="text-sm py-2 text-red-500">{errors.subject}</p>}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className={errors.message ? "border-2 rounded-lg p-3  border-red-200" : "border-2 rounded-lg p-3  border-gray-300"}
                    rows={10}
                    placeholder="Your message goes here..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  {errors.message && <p className="text-sm py-2 text-red-500">{errors.message}</p>}
                </div>
                <button 
                  className={isFormValid ? "w-full p-4 text-gray-100 mt-4": "w-full p-4 text-gray-600 mt-4 from-[#a7a5d4] to-[#a6bff7]"}
                  disabled={!isFormValid}
                  onClick={(e) => {handleSubmit(e)}}
                  >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <LuChevronsUp className="text-[#602aaa]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
