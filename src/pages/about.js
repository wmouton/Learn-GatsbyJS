import React from 'react'
// import link
import { Link } from 'gatsby'
// import components
import Layout from '../components/layout'

// about page functional component
const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <h2>I do front-end and back-end web development in Go and ReactJS.</h2>
      <p>
        see my{' '}
        <a href="https://github.com/l33th" target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        page
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
