import * as React from "react"
import NavBar from "./navbar"
import Footer from "./footer"
import Seo from "../components/seo"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  return(
    <main>
      <NavBar />
<Footer />
    </main>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
