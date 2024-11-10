import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

const Skills = () => {
  return (
   <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl' data-aos="fade-right">Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>
            I have a solid foundation in web development,specializing in HTML,CSS and javascript.My experience
            extends to using frameworkslike React and Next.s to create Dynamic and user-friendly applications.
            I'm also proficient in Tailwand CSS for efficient styling and Design.with a passion for learning,
            I stay updated on the latest Technologies to enhance my Skills set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-out">Typescript</h2>
              <h2 data-aos="zoom-out">React.js</h2>
              <h2 data-aos="zoom-out">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-out">Tailwand</h2>
              <h2 data-aos="zoom-out">CSS</h2>
              <h2 data-aos="zoom-out">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
