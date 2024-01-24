import React from 'react'
import ExperienceItem from './ExperienceItem'
import Resume from './Resume'

const Experience = () => {
  return (
    <section id="experience" className="experience-section" aria-label="Experience">
        <div className="sticky-container">
            <h2 className="experience-heading">Experience</h2>
        </div>
        <div className="experience-content">
            <ExperienceItem 
                dates='MAY - JUL 2023' 
                jobTitle='Software Developer Intern' 
                company='@iLabAfrica'
                sectionContent='Delivered high-quality, robust production code for a diverse array of projects for clients including the Kenyan
                Ministry of Health and the Kenyan Ministry of Foreign Affairs. Provide leadership within engineering department through
                close collaboration, knowledge shares, and mentorship.' 
                technologyList={['Laravel', 'Vue', 'Ionic', 'PHP', 'JavaScript', 'PostgreSQL']}
            />
            <ExperienceItem 
                dates='JAN - MAR 2023' 
                jobTitle='Software Developer Intern' 
                company='Willfreight Express Cargo Services'
                sectionContent='Developed, maintained, and shipped production code. Collaborated with other student designers and engineers to 
                create new products and websites for the organization.' 
                technologyList={['React', 'JavaScript', 'Laravel', 'PHP', 'MySQL']}
            />
            <Resume/>
        </div>
    </section>
  )
}

export default Experience