import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <section id="projects" className="projects-section" aria-label="Projects">
        <div className="sticky-container">
            <h2 className="projects-heading">
                Projects
            </h2>
        </div>
        <div className="projects-content">
            <ProjectItem
                title="Afya One"
                imageSrc="assets/afya.jpg"
                links={{
                    'Web App Github': 'https://github.com/adala-wanyande/afya-one-frontend',
                    'API Github': 'https://github.com/adala-wanyande/afya-one-api'
                }}
                description="Afya One is a health and wellness API designed to help you track your weight, fitness, and nutrition. It's currently under development, with the weight tracking module being the first complete feature. This web app comprises of a React frontend and a REST API developed using Express."
                technologies={['Express', 'JavaScript', 'React', 'Node', 'MongoDB', 'Postman', 'Figma', 'ChakraUI']}
            />
            <ProjectItem
                title="NextLevel Foods · Foodie App"
                imageSrc="assets/nextlevel.png"
                links={{
                    'Live Site': 'https://foodies-app-adala.vercel.app/',
                    'Github': 'https://github.com/adala-wanyande/foodies-app'
                }}
                description="Implemented and deployed a foodies community app called NextLevel Foods that allows users to share recipes and view other community members' recipes. Developed using NextJS and deployed using Vercel. Image hosting was done using Amazon AWS S3 buckets."
                technologies={['NextJS', 'TypeScript', 'Vercel', 'Amazon AWS S3']}
            />
            <ProjectItem
                title="E-Soma Kenya"
                imageSrc="assets/esoma.png"
                links={{
                    'Github': 'https://github.com/eddiemg10/esoma',
                    'Figma': 'https://www.figma.com/file/aqWRLsKXVRqsxbYGIHpz0O/Esoma-KE?type=design&node-id=0%3A1&mode=design&t=3ajarPWrYkymRbr3-1'
                }}
                description="Designed, developed and deployed an e-learning platform to assist underprivileged students access free course material online including; textbooks, blogs and quizzes. Designed in Figma and developed using Laravel by a team of 7 students."
                technologies={['Laravel', 'PHP', 'Figma', 'TailwindCSS', 'Postman']}
            />
            <ProjectItem
                title="Strathmore Disciplinary System"
                imageSrc="assets/strathmore.png"
                links={{
                    'Github': 'https://github.com/eddiemg10/Strathmore-Disciplinary-System',
                    'Figma': 'https://www.figma.com/file/BijrONyCHFtnClHGm20Bpt/Strathmore-Disciplinary-System?type=design&node-id=0%3A1&mode=design&t=zdy6n0aNj7IKqqKT-1'
                }}
                description="Designed and developed a disciplinary system for Strathmore School that allows users to manage discipline and homework records."
                technologies={['Laravel', 'PHP', 'Figma', 'Postman', 'TailwindCSS']}
            />
            <ProjectItem
                title="Rose's Gourmet Pizza"
                imageSrc="assets/roses.png"
                links={{
                    'Live Site': 'https://rosesgourmetpizza.netlify.app/',
                    'Web App Github': 'https://github.com/adala-wanyande/pizza-ordering-project',
                    'API Github': 'https://github.com/adala-wanyande/pizza-ordering-project-backend-json-server',
                    'Figma': 'https://www.figma.com/file/0f2SgNnRvx6wSCsC6zU12D/Pizza-Ordering-Project---Rose\'s-Gourmet-Pizza?type=design&node-id=0%3A1&mode=design&t=IbASjydEK9LcfMrc-1'
                }}
                description="Worked with a group of three developers to create a website for a gourmet pizza restaurant. The site allows users to order for pizzas, view the restaurant's menu, and contact the restaurant. The frontend for the website was deployed using Netlify, and the backend was deployed using Heroku. The low-fidelity wireframes for the site were designed in Figma."
                technologies={['Netlify', 'Heroku', 'Figma', 'React', 'Node', 'JSON Server']}
            />
        </div>
    </section>
  )
}

export default Projects