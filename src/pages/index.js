import * as React from "react"
import HomePage from "./homepage.js"
import Layout from "../components/layout/LayOut.jsx"
import Seo from "../components/seo"
import AboutPage from "./about.js"
import { HiPaintBrush } from "react-icons/hi2"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  return (
    <>
      <Layout>
        <AboutPage />
        {/* <HomePage /> */}
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
