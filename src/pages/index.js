import * as React from "react"
import MainPage from "./homepage"
import Layout from '../components/layout/LayOut.jsx'
import ContactInfo from "../components/helpers/ContactInfo.jsx"
import Seo from "../components/seo"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  return ( 


    <>
    {/* <Vision /> */}
    < ContactInfo />
    </>
  //    <Layout> 
  //  <MainPage />
  //  </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
