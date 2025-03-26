import React from "react"
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className=" flex flex-col w-full h-auto px-6 py-4 bg-gray-800 text-white fixed bottom-0 left-0  p-4 " >
              {/* FAQ */}
        {/* <span className=" flex space-x-2 text-gray-400  no-underline list-none hover:underline hover:text-white ">
          <a href="#">
            <li className=" no-underline space-x-4 hover:text-white text-gray-400">
              FAQ
            </li>
          </a>

          <a href="#">
            <li className="space-x-4 hover:text-white text-gray-400">
              Support
            </li>
          </a>
        </span> */}

        {/* pages */}

        
        <span className="flex no-underline list-none  justify-center space-x-4 ">
          <a
            href="#"
            className="text-gray-400 no-underline list-none  hover:underline hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 no-underline list-none  hover:underline hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 no-underline list-none  hover:underline hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-400  no-underline list-none  hover:underline hover:text-white"
          >
            Contact
          </a>
        </span>

        {/* social media */}
        <span className="flex flex-wrap justify-center space-x-4">
          <a href="#">
            <li className=" flex space-x-2 items-center text-gray-400 no-underline list-none  hover:text-white">
              <FaXTwitter size={12} />
            </li>
          </a>

          <a href="#">
            <li className="text-gray-400 no-underline list-none  hover:text-white">
              <FaInstagram size={12} />
            </li>
          </a>

          <a href="#">
            <li className="text-gray-400 no-underline list-none  hover:text-white">
              <FaTiktok size={12} />
            </li>
          </a>

          <a href="#">
            <li className="text-gray-400 no-underline list-none  hover:text-white">
              <FaWhatsapp size={12} />
            </li>
          </a>

          <a href=" #">
            <li className="text-gray-400 no-underline list-none  hover:text-white">
              <FaFacebook size={12} />
            </li>
          </a>
        </span>

        <span className="flex text-white  hover:underline hover:text-white space-x-2">
          <a href="#"> </a>
          <p className=" cursor-pointer"> Privacy Policy</p>
        </span>

        {/* brand name and date */}
        <hr className=" w-full  bg-[#ccc]  " />
        <p className=" flex !w-full font-serif  justify-center">
          {" "}
          Universal Printing Press &#64; {new Date().getFullYear()}.
        </p>
        <p className="flex justify-center">All rights reserved.</p>
      
    </footer>
  )
}

export default Footer
