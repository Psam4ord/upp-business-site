import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"

const Layout = ({children }) => {
  return (
    <div>
      <NavBar />
    <div> {children }</div>
      <Footer />
    </div>
  )
}

export default Layout
