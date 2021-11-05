import React from 'react'
// import link
import { Link } from 'gatsby'
// import scss
import * as headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <h1>WMouton</h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
