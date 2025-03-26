import React from "react"
import MobileMenu from "../mobileMenu"
import MdScreensPlus from "../TabletMenu"

const NavBar = () => {
  return (
    <header className="h-auto fixed top-0 left-0  w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4  lg:px-8">
        <div className="flex flex-row gap-40 ">
          <a href="#" className=" md:hidden flex justify-center items-center
           w-20 h-20 rounded-full border  border-black 
           font-bold text-gray-800 m-1">
            Logo
          </a>
          <span>
            {/* mobile screens  */}
            <MobileMenu />
            {/* tablet screen and upwards*/}
            <MdScreensPlus />
          </span>
        </div>
      </div>
    </header>
  )
}

export default NavBar
