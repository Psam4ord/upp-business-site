import React from "react"
import ButtonComponent from "../button"

const ContactInfo = () => {
  
  const email = process.env.GATSBY_EMAIL;
  const phone = process.env.GATSBY_PHONE;

  return (
    <div>
      <div className="flex space-x-4 m-1">
        <button
          onClick={() => (window.location.href = `mailto:${email}`)}
          className="px-4 py-2 bg-blue-500 text-white 
          rounded-lg shadow hover:bg-blue-600 transition"
        >
          Email Us
        </button>
        <button
          onClick={() => (window.location.href = `tel:${phone}`)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg 
          shadow hover:bg-green-600 transition"
        >
          Get In Touch With Us
        </button>
      </div>
    </div>
  )
}

export default ContactInfo
