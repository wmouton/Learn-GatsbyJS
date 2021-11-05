import React from 'react'
// import components
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact me</h1>
      <h2>The best way to contact me is via l33th@protonmail.ch</h2>
      <p>
        You can also contact me via{' '}
        <a
          href="https://twitter.com/l33th_dev"
          target="_blank"
          rel="noreferrer"
        >
          Twitter!
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
