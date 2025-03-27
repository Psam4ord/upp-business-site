import React from "react"

const ButtonComponent = ({ style }) => {
  return (
    <div>
      {/* ButtonComponent */}
      <button
        style={style}
        class="bg-blue-600 text-white px-4 py-2 
             rounded-lg hover:bg-sky-500 transition"
      >
        Get Started
      </button>
    </div>
  )
}

export default ButtonComponent
