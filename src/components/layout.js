import React from 'react'
// import components
import Header from './header'
import Footer from './footer'
// import css
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
