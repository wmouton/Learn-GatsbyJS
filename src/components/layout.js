import React from 'react'
// import components
import Header from './header'
import Footer from './footer'
// import css
import '../styles/index.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
