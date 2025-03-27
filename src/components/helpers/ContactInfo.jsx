import React from "react"
import { FaMapLocationDot } from "react-icons/fa6"
import {
  MdOutlineMail,
  MdOutlineGpsFixed,
  MdOutlineAddIcCall,
} from "react-icons/md"
import ButtonComponent from "../button"

const ContactInfo = () => {
  const email = process.env.GATSBY_EMAIL
  const phone = process.env.GATSBY_PHONE
  const GpsAddress = process.env.GATSBY_GPS

  return (
    <div className="flex flex-col w-full  mt-4 p-4 ">
      <aside className=" w-full h-full border border-l-4 border-gray-500 rounded-lg pl-4 mb-2 ">
        <h2 className=" flex text-3xl font-medium capitalize m-1 justify-center ">
          locate us:
        </h2>
        <address className="flex flex-wrap ">
          <h3 className="">Universal Printing Press Limited </h3>
          <div className="flex justify-center ">
            <FaMapLocationDot size={32} />
            1st Floor, Awurade Na Aye storey Building,
            Sampa, Jaman North,
             Bono region 
             Ghana-West Africa
          </div>
          <hr className="bg-black h-[2px] my-2 w-[50%] flex justify-center"/>
          <div className="flex justify-center space-x-2">
            <MdOutlineGpsFixed size={32} />
            GPS-Address: BJ-0004-1157
          </div>
        </address>
      </aside>
      <blockquote class="border-l-4 font-semibold p-2 my-4 border-gray-500 pl-4  text-gray-700 ">
        "Giving is better than receiving because giving starts the receiving
        process."
        <span class="block  uppercase mt-2 text-right font-bold">
          – Jim Rhon
        </span>
      </blockquote>

      <button
        onClick={() => (window.location.href = `mailto:${email}`)}
        className=" w-[30%] px-2 py-2 bg-blue-500 text-white 
          rounded-lg shadow hover:bg-blue-600 transition"
      >
        Email Us
      </button> 
      <button
        onClick={() => (window.location.href = `tel:${phone}`)}
        className=" w-[60%] my-4  py-2 bg-blue-500 text-white rounded-lg 
          shadow hover:bg-blue-600  transition "
      >
        Get In Touch With Us
      </button>
     
    </div>
  )
}

export default ContactInfo
