import React, { useState, useRef, useEffect } from "react"
import { FaBars } from "react-icons/fa6"
import { MdOutlineCancel } from "react-icons/md"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div>
      <button
        onClick={toggleMenu}
        className=" md:hidden p-2 text-3xl text-gray-800 cursor-pointer transition-all duration-300 hover:text-gray-600"
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdOutlineCancel  /> : <FaBars />}
      </button>

      {/* Toggle Button */}

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`absolute  w-[50%] inset-y-11 right-0 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 visible h-screen  "
            : "opacity-0 scale-95 -translate-y-3 invisible"
        }`}
      >
        <ul className="flex flex-col  justify-self-end space-y-2 p-4   text-gray-800 font-serif">
          {[
            "Home",
            "About",
            "Services",
            "Contact",
            "Vision",
            "Mission",
            "Updates",
          ].map(item => (
            <li
              key={item}
              className="hover:bg-gray-200 rounded-md transition-colors duration-200 p-2"
            >
              <a href="#" className="block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
