'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import CentreLine from '@/components/timeline/centreLine'
import Experience from '@/components/timeline/experience'
import DownArrow from '@/components/svg/downArrow'
import Signature from '@/components/svg/signature'
import Raindrop from '@/components/raindrop'

// skills data
const skills = [
  'JavaScript',
  'C#',
  'React.js',
  'Next.js',
  'Matireal-UI',
  'CSS',
  'TailwindCSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'Framer Motion',
  'RESTful API',
  'TypeScript',
  'MySQL',
  'PHP',
  'Git',
  'Figma',
  'Photoshop',
  'Canva',
  'CapCut',
  'Garage Band',
]
//expereince data
const experiences = [
  {
    title: 'Web Developer',
    desc: [
      'Building web pages using HTML, CSS and JavaScript, or frameworks as such React. ',
      'Deploying web applications to servers and hosting services',
      'Communication, problem-solving, and teamwork',
    ],
    date: 'September 2022 - Present',
    company: 'Freelance',
  },
  {
    title: 'Marketing Assistant and Frontline Receptionist',
    desc: [
      'Executed marketing strategies, including website and social media campaigns, to enhance brand visibility.',
      'Demonstrated strong people skills in managing front desk responsibilities and providing exceptional customer service.',
    ],
    date: 'September 2016 - August 2021',
    company: 'Taupo Debretts Spa Resort',
  },
  {
    title: 'Graphic Designer',
    desc: [
      'Applied graphic design skills to create visually appealing promotional materials, contributing to a dynamic marketing approach',
      'Team work and communication',
    ],
    date: 'July 2010 - April 2011',
    company: 'China Yuanchen Interior & Exterior Design Company',
  },
]

const About = () => {
  const skillRef = useRef()

  const isSkillRefInView = useInView(skillRef, { margin: '-100px' })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, {
    margin: '-100px',
  })

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full  pt-20 ">
        {/* text container */}
        <div className=" px-6 sm:p-10 md:px-20 lg:px-40 xl:px-[12rem] 2xl:px-[20rem] flex flex-col gap-24 md:gap-32  lg:gap-48 xl:gap-25 ">
          <div className="flex flex-col xl:flex-row gap-24 md:gap-32 lg:gap-48 xl:gap-52 items-start xl:items-center">
            {/* Biography container */}
            <motion.div className="flex flex-col gap-12 justify-center">
              <motion.h1
                className="font-bold text-2xl uppercase text-[#cace64]"
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Biography
              </motion.h1>
              <motion.p
                className="flex justify-between md:text-lg"
                initial={{ x: '-200vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                I love to create and find it comfortable and secure to work
                within sensible guidelines or structures. Software development
                is in line with my spiritual order - to perform routine or
                standardized tasks using creative thinking and problem-solving
                skills. I feel grounded and joyful by adhering to the logical
                constructs of programming languages while unleashing my
                creativity. Experimenting with different approaches and
                ultimately discovering solutions fills me with exhilaration.
              </motion.p>
              <motion.p
                className="flex justify-between md:text-lg"
                initial={{ x: '-200vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 1.5 }}
              >
                Therefore, it has become my passion, my hobby, and will be my
                career.
              </motion.p>
              <motion.span
                className="self-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1, ease: 'easeInOut' }}
              >
                <Signature />
              </motion.span>
              <motion.div
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
                className="w-scren flex items-center justify-center"
              >
                <div className="block xl:hidden">
                  <DownArrow />
                </div>
              </motion.div>
            </motion.div>
            {/* skill container */}
            <div
              className="flex flex-col gap-12 justify-between"
              ref={skillRef}
            >
              <motion.h1
                initial={{ x: '100vw' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="font-bold text-2xl uppercase text-[#cace64] "
              >
                Skills
              </motion.h1>
              {/* skill tags */}
              <motion.div
                className="flex gap-4 flex-wrap cursor-pointer "
                initial={{ x: '200vw' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 1.5 }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded p-2 text-sm  bg-black text-white hover:bg-white hover:text-black font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>{' '}
          <div>
            <DownArrow />
          </div>
          {/* experiences container */}
          <motion.div
            className="flex flex-col gap-12 justify-center pb-48  "
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: '-100vw' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="font-bold text-2xl uppercase text-[#cace64] "
            >
              Experience
            </motion.h1>
            {/* Experience list */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={isExperienceRefInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
            >
              {/* List items */}
              {/* item one */}
              <div className="flex justify-between md:h-48 h-60 ">
                {/* Left */}
                <Experience experience={experiences[0]} />
                {/* centre */}
                <CentreLine />
                {/* right */}
                <div className="w-1/3 "></div>
              </div>
              {/* item two */}
              <div className="flex justify-between md:h-48 h-50 ">
                {/* Left */}
                <div className="w-1/3 "></div>
                {/* centre */}
                <CentreLine />
                {/* right */}
                <Experience experience={experiences[1]} />
              </div>
              {/* item three */}
              <div className="flex justify-between md:h-48  ">
                {/* Left */}
                <Experience experience={experiences[2]} />
                {/* centre */}
                <CentreLine />
                {/* right */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
