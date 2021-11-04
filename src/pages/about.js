import React from 'react'
// import link
import { Link } from 'gatsby'
// import components
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <h2>I do front-end and back-end web development in Go and ReactJS.</h2>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
