import React from "react"
import ButtonComponent from "../button"

const ContactInfo = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <button
          onClick={() => (window.location.href = `mailto:${email}`)}
          className="px-4 py-2 bg-blue-500 text-white 
          rounded-lg shadow hover:bg-blue-600 transition">
          Email Me
        </button>
        <button
          onClick={() => (window.location.href = `tel:${phone}`)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg 
          shadow hover:bg-green-600 transition"
        >
          Call Me
        </button>
      </div>

      <ButtonComponent>Get in Touch with us</ButtonComponent>
    </div>
  )
}

export default ContactInfo
