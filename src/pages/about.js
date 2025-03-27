import React from 'react'
import MissionPage from './helppages/mission'
import Vision from './helppages/vision'
import ContactInfo from '../components/helpers/ContactInfo'
import Layout from '../components/layout/LayOut'


const AboutPage = () => {
  return (
    <div>
        <Layout >
        <MissionPage />
        <Vision />
        <ContactInfo />
        </Layout>

    </div>
  )
}

export default AboutPage