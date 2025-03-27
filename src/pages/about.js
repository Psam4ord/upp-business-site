import React from "react"
import MissionPage from "./helppages/mission"
import Vision from "./helppages/vision"
import ContactInfo from "../components/helpers/ContactInfo"
import Layout from "../components/layout/LayOut"

const AboutPage = () => {
  return (
    <div className="m-4">
      <p className="p-2 w-full h-full border border-l-4 border-gray-500 rounded-lg pl-4 mb-2  ">
        We are more than a Printing press; We create skills and opportunities in
        our communitties. Over the years, the printing industry has seen
        significant advancements in service quality, innovative printing
        solutions, and cutting-edge branding techniques. Universal Printing
        Press has built a strong reputation as a customer-focused,
        business-friendly, and socially responsible printing company.
      </p>

      <ContactInfo />
    </div>
  )
}

export default AboutPage
