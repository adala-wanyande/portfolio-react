import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="experience-section" aria-label="Experience">
        <div className="sticky-container">
            <h2 className="experience-heading">Experience</h2>
        </div>
        <div className="experience-content">
            <div className="overlay">
                <div className="dates-container">
                    <p className="dates">MAY - JUL 2023</p>
                </div>
                <div>
                    <a className= "job-title-details" href="https://www.ilabafrica.ac.ke/" target="_blank" rel="noopener noreferrer">
                        <p className="job-title">Software Developer Intern ·&nbsp;</p>
                        <p className="company">
                            @iLabAfrica
                            <svg xmlns="http://www.w3.org/2000/svg" className="company-svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </p>
                    </a>
                    <p className="section-content">
                        Delivered high-quality, robust production code for a diverse array of projects for clients including the Kenyan
                        Ministry of Health and the Kenyan Ministry of Foreign Affairs. Provide leadership within engineering department through
                        close collaboration, knowledge shares, and mentorship.
                    </p>
                    <ul className="technologies-list">
                        <li>
                            <div className="tech-badge">
                                Laravel
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                Vue
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                Ionic
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                PHP
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                JavaScript
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                PostgreSQL
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay">
                <div className="dates-container">
                    <p className="dates">JAN - MAR 2023</p>
                </div>
                <div>
                    <a className= "job-title-details" href="https://www.willfreight.ke/"  target="_blank" rel="noopener noreferrer">
                        <p className="job-title">Software Developer Intern ·&nbsp;</p>
                        <p className="company">
                            Willfreight Express Cargo Services
                            <svg xmlns="http://www.w3.org/2000/svg" className="company-svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </p>
                    </a>
                    <p className="section-content">
                        Developed, maintained, and shipped production code. Collaborated with other student designers and engineers to 
                        create new products and websites for the organization.
                    </p>
                    <ul className="technologies-list">
                        <li>
                            <div className="tech-badge">
                                React
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                JavaScript
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                Laravel
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                PHP
                            </div>
                        </li>
                        <li>
                            <div className="tech-badge">
                                MySQL
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <a className= "job-title-details" href="assets/CV-Benard_Adala_Wanyande.pdf" target="_blank" rel="noopener noreferrer">
                    <p className="company">
                        View Full Resume
                        <svg xmlns="http://www.w3.org/2000/svg" className="company-svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Experience