import * as React from "react"
import MainPage from "./homepage"
import Layout from '../components/layout/LayOut.jsx'

import Seo from "../components/seo"
import MobileMenu from "../components/mobileMenu"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  return ( 
     <Layout> 
   <MainPage />
   </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
