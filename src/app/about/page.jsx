'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import CentreLine from '@/components/timeline/centreLine'
import Experience from '@/components/timeline/experience'
import DownArrow from '@/components/svg/downArrow'
import Signature from '@/components/svg/signature'
import BackToTopButton from '@/components/backToTopButton'
import Logo from '@/components/svg/logo'
import { Barlow } from 'next/font/google'

// skills data
const skills = [
  'JavaScript',
  'C#',
  'React.js',
  'React Native',
  'Expo',
  'Next.js',
  'Redux Toolkit',
  'RTK Query',
  'Material-UI',
  'CSS',
  'TailwindCSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'Framer Motion',
  'RESTful API',
  'TypeScript',
  'MSSQL',
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
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['200', '400', '600', '900'],
})

const About = () => {
  const skillRef = useRef()
  const skillTagRef = useRef()

  const isSkillRefInView = useInView(skillRef, { margin: '-500px' })
  const isSkillTagRefInView = useInView(skillTagRef, {
    margin: '-100px',
  })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, {
    margin: '-500px',
  })

  const skillMobileRef = useRef()

  const isSkillMobileRefInView = useInView(skillMobileRef, { once: true })
  const experienceMobileRef = useRef()
  const isExperienceMobileRefInView = useInView(experienceMobileRef, {
    once: true,
  })

  const pRef01 = useRef()
  const pRef02 = useRef()
  const pRef03 = useRef()
  const signatureRef = useRef()
  const arrow01Ref = useRef()
  const arrow02Ref = useRef()

  const isPRef01InView = useInView(pRef01, { margin: '-100px' })
  const isPRef02InView = useInView(pRef02, { margin: '-100px' })
  const isPRef03InView = useInView(pRef03, { margin: '-100px' })
  const isSignatureInView = useInView(signatureRef, { margin: '-100px' })
  const isArrow01InView = useInView(arrow01Ref, { margin: '-100px' })
  const isArrow02InView = useInView(arrow02Ref, { margin: '-100px' })

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.2 }}
    >
      {/* mobile container */}
      <div className="h-full  pt-20 sm:hidden ">
        {/* text container */}
        <div className=" px-6 sm:p-10 md:px-20 lg:px-40 xl:px-[12rem] 2xl:px-[20rem] flex flex-col gap-24  md:gap-32  lg:gap-48 xl:gap-25 ">
          <div className="flex flex-col xl:flex-row gap-24 md:gap-32 lg:gap-48 xl:gap-52 items-start xl:items-center">
            {/* Biography container */}
            <motion.div className="flex flex-col gap-12 justify-center">
              <motion.h1
                className={`${barlow.className} text-6xl  uppercase md:text-[4rem] lg:text-[4rem] xl:text-[6rem]`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                Biography
              </motion.h1>
              <motion.p
                className="flex justify-between md:text-lg"
                initial={{ y: '50vh', opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
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
                initial={{ y: '50vh', opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Therefore, it has become my passion, my hobby, and will be my
                career.
              </motion.p>
              <motion.span
                className="self-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1, ease: 'easeInOut' }}
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
                  <DownArrow width="30" height="auto" />
                </div>
              </motion.div>
            </motion.div>
            {/* skill container */}
            <div
              className="flex flex-col gap-12 justify-between"
              ref={skillMobileRef}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isSkillMobileRefInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className={`${barlow.className} text-6xl  uppercase md:text-[4rem] lg:text-[4rem] xl:text-[6rem]`}
              >
                Skills
              </motion.h1>
              {/* skill tags */}
              <motion.div
                className="flex gap-4 flex-wrap cursor-pointer "
                initial={{ opacity: 0, y: '50vh', scale: 0.5 }}
                animate={
                  isSkillMobileRefInView ? { opacity: 1, y: 0, scale: 1 } : {}
                }
                transition={{ delay: 1.5, duration: 0.5 }}
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
            <DownArrow width="30" height="auto" />
          </div>
          {/* experiences container */}
          <motion.div
            className="flex flex-col gap-12 justify-center pb-48  "
            ref={experienceMobileRef}
          >
            <motion.h1
              initial={{ y: '50vh', scale: 0.5, opacity: 0 }}
              animate={
                isExperienceMobileRefInView
                  ? { y: 1, scale: 1, opacity: 1 }
                  : {}
              }
              transition={{ delay: 0.8, duration: 0.5 }}
              className={`${barlow.className} text-6xl  uppercase md:text-[4rem] lg:text-[4rem] xl:text-[6rem]`}
            >
              Experience
            </motion.h1>
            {/* Experience list */}
            <motion.div
              className="flex flex-col gap-5 justify-center items-center"
              initial={{ y: '50vh', opacity: 0 }}
              animate={isExperienceMobileRefInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              {/* List items */}
              {/* item one */}
              <div className="flex justify-between  h-fit ">
                {/* Left */}
                <Experience experience={experiences[0]} />
                {/* centre */}
              </div>
              {/* item two */}
              <div className="flex justify-between md:h-48 h-fit ">
                {/* Left */}

                {/* right */}
                <Experience experience={experiences[1]} />
              </div>
              {/* item three */}
              <div className="flex justify-between   ">
                {/* Left */}
                <Experience experience={experiences[2]} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* desktop container */}
      <div className="h-full pt-20 hidden sm:flex flex-col justify-around items-center overflow-hidden ">
        {/* biography container */}
        {/* header */}
        <motion.div
          className="  md:mx-[8rem] lg:mx-[10rem] xl:mx-[15rem] 2xl:mx-[20rem]  text-black rounded-3xl min-h-[calc(80vw/3)] w-fit relative  justify-center flex gap-6  flex-col items-start xl:items-center"
          initial={{ height: '80vh' }}
          animate={{ height: '20vh' }}
          transition={{ delay: 3, duration: 1, ease: 'easeInOut' }}
        >
          <motion.p
            className={`${barlow.className} text-6xl  uppercase md:text-[4rem] lg:text-[4rem] whitespace-pre-line opacity-0 xl:text-[6rem]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
          >
            I love to create
          </motion.p>
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 1 }}
              transition={{
                delay: 1.6,
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
              }}
              className=" h-[calc(50vw/3)] w-[calc(80vw/3)] bg-[url('/assets/handdrawing01.png')] bg-cover origin-center"
            ></motion.div>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 1 }}
              transition={{
                delay: 2,
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
              }}
              className=" h-[calc(50vw/3)] w-[calc(80vw/3)] bg-[url('/assets/handdrawing02.png')] bg-cover origin-center"
            ></motion.div>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 1 }}
              transition={{
                delay: 2.4,
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
              }}
              className=" h-[calc(50vw/3)] w-[calc(80vw/3)] bg-[url('/assets/handdrawing03.png')] bg-cover origin-center"
            ></motion.div>
          </motion.div>
        </motion.div>
        {/* Biography text */}
        <div className="p-8  mx-[6rem] md:mx-[10rem] lg:mx-[15rem] xl:mx-[20rem] 2xl:mx-[30rem] flex flex-col gap-10 mt-[5rem] justify-end items-end rounded-3xl xl:justify-start text-lg lg:text-xl text-[#242424]">
          <div className="flex flex-col  gap-12 justify-between">
            <div ref={pRef01}>
              <motion.p
                className="text-justify "
                initial={{ opacity: 0, y: '50%' }}
                animate={isPRef01InView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
              >
                I find it comfortable and secure to work within{' '}
                <b className=" uppercase">sensible guidelines</b> or{' '}
                <b className=" uppercase">structures</b>.{' '}
              </motion.p>
            </div>
            <div ref={pRef02}>
              <motion.p
                initial={{ opacity: 0, y: '50%' }}
                animate={isPRef02InView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <b>Software development</b> is in line with my spiritual order -
                to perform routine or standardized tasks using{' '}
                <b className="text-xl uppercase"> creative thinking </b> and{' '}
                <b className="text-xl uppercase">problem-solving</b> skills.
              </motion.p>
            </div>
            <div ref={pRef03}>
              <motion.p
                className="text-justify   "
                initial={{ opacity: 0, y: '50%' }}
                animate={isPRef03InView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                {' '}
                I feel <b className=" uppercase">grounded</b> and{' '}
                <b className=" uppercase">joyful</b> by adhering to the logical
                constructs of programming languages while unleashing my{' '}
                <b className="text-xl uppercase">creativity</b> Experimenting
                with different approaches and ultimately discovering solutions
                fills me with <b className=" uppercase"> exhilaration.</b>
              </motion.p>{' '}
            </div>
            {/* Signature */}
            <motion.div
              className="flex justify-end px-5"
              ref={signatureRef}
              initial={{ opacity: 0, y: '50%' }}
              animate={isSignatureInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <Signature />
            </motion.div>
            <motion.div
              ref={arrow01Ref}
              initial={{ opacity: 0, y: '50%' }}
              animate={isArrow01InView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <DownArrow />
            </motion.div>
          </div>{' '}
          <div className="flex  items-start justify-start gap-10">
            {' '}
            <div className="flex flex-col gap-5 w-full justify-between"></div>
          </div>
        </div>
        {/* Skills */}
        <div
          className="h-[calc(100vh-8rem)] flex  items-center justify-center flex-col gap-10 "
          ref={skillRef}
        >
          <motion.h1
            initial={{ opacity: 0, y: '50%' }}
            animate={isSkillRefInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className={`${barlow.className} text-6xl  uppercase md:text-[4rem] lg:text-[4rem] xl:text-[6rem]`}
          >
            Skills
          </motion.h1>{' '}
          <div
            className="flex gap-4 flex-wrap cursor-pointer md:w-[70vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw] "
            ref={skillTagRef}
          >
            {skills.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, y: '50%' }}
                animate={isSkillTagRefInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 1, duration: 0.2 }}
                key={index}
                className="rounded p-2 text-sm  bg-black text-white hover:bg-white hover:text-black font-semibold"
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <motion.div
            ref={arrow02Ref}
            initial={{ opacity: 0, y: '50%' }}
            animate={isArrow02InView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <DownArrow />
          </motion.div>
        </div>
        {/* Experiences */}
        <div
          className="h-[calc(100vh-8rem)] flex  items-center justify-center flex-col gap-10 "
          ref={experienceRef}
        >
          <motion.h1
            initial={{ y: '50%', opacity: 0 }}
            animate={isExperienceRefInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className={`${barlow.className} text-6xl  uppercase md:text-[4rem] lg:text-[4rem] xl:text-[6rem]`}
          >
            Experiences
          </motion.h1>{' '}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={isExperienceRefInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
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
        </div>
      </div>

      <div className="md:hidden">
        <BackToTopButton bgcolor="#E6F14A" />{' '}
      </div>
    </motion.div>
  )
}

export default About
