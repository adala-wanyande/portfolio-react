import React from 'react'
import Intro from './Intro'
import Navigation from './Navigation'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
        <div className="sub-container">
            <Intro/>
            <Navigation/>
        </div>
        <Socials/>
    </header>
  )
}

export default Header