import React from 'react'
// import components
import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact me</h1>
      <h2>The best way to contact me is via l33th@protonmail.ch on twitter</h2>
      <p>
        You can follow me on{' '}
        <a
          href="https://twitter.com/l33th_dev"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
