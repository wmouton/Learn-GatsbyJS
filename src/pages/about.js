import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <div>
      <h1>About me</h1>
      <h2>I do front-end and back-end web development in Go and ReactJS.</h2>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </div>
  )
}

export default AboutPage
