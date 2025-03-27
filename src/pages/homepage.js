import React from "react"
import ButtonComponent from "../components/button"

const HomePage = () => {
  return (
    <div
      className=" md:bg-white flex flex-col w-full min-h-screen 
        pt-28 pb-32 px-3 bg-sky-200 overflow-hidden "
    >
      <div className="flex justify-center md:hidden ">
        <span className="z-40 bg-[#0d0a3dea] w-12 h-12 rounded-full text-white  p-1 ">
          +
        </span>
        <span className="z-30 bg-[#0d0a3dea] w-12 h-12 rounded-full text-white  p-1 ">
          .
        </span>
        <span className="z-20 bg-[#5f2234] w-12 h-12 rounded-full text-white  p-1 ">
          +
        </span>
        <span className="z-10 bg-[#0d0a3dea] w-12 h-12 rounded-full text-white  p-1 ">
          .
        </span>
        <span className="z-0 bg-[#0d0a3dea] w-12 h-12 rounded-full text-white  p-1 ">
          +
        </span>
      </div>

      <h1 className=" md:hidden flex  justify-center h-full font-extrabold text-3xl uppercase  px-1 pt-5">
        welcome to Universal Printings
      </h1>
      <h3 className=" md:hidden lex font-sans text-lg pb-2 font-semibold capitalize  justify-center ">
        " you think it, we ink it"
      </h3>
      <ButtonComponent style={{ display:"flex",fontFamily:"arial", fontWeight : "bold", padding: "10px"}}
      />

      {/* first tag */}
      <div
        className=" inset-x-0 bottom-0 text-black w-40 h-2/5
                     -skew-x-6 skew-y-12 mt-16  bg-white  rounded-md justify-center"
      >
        <p className=" md:hidden  flex w-full capitalize font-serif italic text-end rounded-md  p-2">
          Brand yourselve with us
        </p>
      </div>
      {/* Tag 2 */}
      <div
        className=" inset-x-0 bottom-0 text-black w-40 h-2/5
                     -skew-x-6 -skew-y-12 mt-16  bg-white rounded-md justify-center"
      >
        <p className=" md:hidden  flex w-full font-serif italic text-end rounded-md  p-2">
          Brand yourselve with us
        </p>
      </div>
      <div className="flex  flex-wrap bottom-0 left-0 w-full fixed justify-center py-5 text-white bg-black ">
        <p className="font-medium">
          Universal Printing press &#64; {new Date().getFullYear()}
        </p>
        <p className="flex  capitalize w-full justify-center pt-2 italic ">
          <a href="#" className="  hover:text-[#ccc]">
            privacy policy
          </a>
        </p>
      </div>
    </div>
  )
}

export default HomePage
