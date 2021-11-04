import React from 'react'
// import link
import { Link } from 'gatsby'
// import components
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About me</h1>
      <h2>I do front-end and back-end web development in Go and ReactJS.</h2>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
