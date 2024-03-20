import React from 'react'

const About = () => {
  return (
    <section className='section'>
      <div className="boxes-container">
        <div className="columns-box1">
            <div className='col col-1 flex'>
                <img src="/1.jpeg" alt="" />
                <img src="/2.jpeg" alt="" />
            </div>
            <div className='col col-2'>
                <h1>Shivam</h1>
                <span>23 January 2023</span>
                <div className="line"></div>
                <div className="text-box">
                    <p>I am a highly skilled full stack web developer, specializing in the MERN stack and proficient in TypeScript, PostgreSQL, Prisma, AWS, Cloudflare Workers, and Next.js. With a deep understanding of these technologies, I have mastered the art of building robust, scalable, and efficient web applications.</p>
                </div>
            </div>
            <div className='col col-3'></div>
        </div>
      </div>
    </section>
  )
}

export default About
