import React from 'react'

const Navigation = () => {
  return (
    <nav className="" aria-label="In-page jump links">
        <ul>
            <li>
                <a href="#about">
                    <span className="nav-indicator"></span>
                    <span className="nav-text">About</span>
                </a>
            </li>
            <li>
                <a href="#experience">
                    <span className="nav-indicator"></span>
                    <span className="nav-text">Experience</span>
                </a>
            </li>
            <li>
                <a href="#projects">
                    <span className="nav-indicator"></span>
                    <span className="nav-text">Projects</span>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation