import React from "react"

const MdScreensPlus = () => {
  return (
    <div className=" ">
       <a href="#" className=" hidden md:flex justify-center items-center
           w-20 h-20 rounded-full border  border-black 
           font-bold text-gray-800 m-1">
            Logo
          </a>
      <ul className="hidden md:flex p-4 text-gray-800  font-serif">
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
            className="hover:bg-gray-200 rounded-md 
            transition-colors duration-200 p-2">
            <a href="#" className="flex">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MdScreensPlus
