import React from 'react'

const ExperienceItem = (props) => {
  return (
    <div className="overlay">
                <div className="dates-container">
                    <p className="dates">{props.dates}</p>
                </div>
                <div>
                    <a className= "job-title-details" href="https://www.ilabafrica.ac.ke/" target="_blank" rel="noopener noreferrer">
                        <p className="job-title">{props.jobTitle} ·&nbsp;</p>
                        <p className="company">
                            {props.company}
                            <svg xmlns="http://www.w3.org/2000/svg" className="company-svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </p>
                    </a>
                    <p className="section-content">
                        {props.sectionContent}
                    </p>
                    {props.technologyList && props.technologyList.length > 0 && (
                    <ul className="technologies-list">
                        {props.technologyList.map((tech, index) => (
                            <li key={index}>
                            <div className="tech-badge">{tech}</div>
                            </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
  )
}

export default ExperienceItem