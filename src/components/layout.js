import React from 'react'
// import components
import Header from './header'
import Footer from './footer'
// import css
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

// layout functional component
const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
