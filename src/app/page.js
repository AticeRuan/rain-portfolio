'use client'
import DownArrow from '@/components/svg/downArrow'
import { motion } from 'framer-motion'
import { useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Stalemate, Barlow } from 'next/font/google'
import Logo from '@/components/svg/logo'
import BackToTopButton from '@/components/backToTopButton'

const nicone = Stalemate({ subsets: ['latin'], weight: '400' })
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['200', '400', '600', '900'],
})
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

const Homepage = () => {
  const targetRef = useRef()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const nameScale = useTransform(scrollYProgress, [0, 0.5], [1, 1])
  const introRef = useRef()
  const isIntroInView = useInView(introRef, { margin: '-100px' })
  const welcomeRef = useRef()
  const isWelcomeInView = useInView(welcomeRef, { margin: '-100px' })
  const contentRef = useRef()
  const isContentInView = useInView(contentRef, { margin: '-100px' })
  const buttonRef = useRef()
  const isButtonInView = useInView(buttonRef, { margin: '-100px' })

  const arrow02Ref = useRef()
  const isArrow02InView = useInView(arrow02Ref, { margin: '-100px' })
  const skillRef = useRef()
  const skillTagRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: '-500px' })
  const isSkillTagRefInView = useInView(skillTagRef, {
    margin: '-100px',
  })

  const skillMobileRef = useRef()

  const isSkillMobileRefInView = useInView(skillMobileRef, { once: true })
  return (
    <motion.div className="h-full ">
      <div className="flex flex-col h-full justify-center items-center ">
        {/* wrapper */}
        <motion.div
          className="relative h-screen "
          ref={targetRef}
          style={{ opacity }}
        >
          {' '}
          {/* title */}
          <motion.div
            className="fixed mt-[40vh] "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <div className="relative flex justify-center flex-col items-center ">
              <motion.div
                className="absolute inset-0 flex items-center justify-center flex-col font-black"
                style={{ scale }}
              >
                <h1
                  className={`${barlow.className} text-8xl sm:text-[10rem] md:text-[11rem] lg:text-[16rem] xl:text-[18rem] 2xl:text-[23rem]    leading-10  font-light tracking-tightest  `}
                >
                  Developer
                </h1>
                <h1
                  className={`${barlow.className} text-8xl sm:text-[10rem] md:text-[11rem] lg:text-[16rem] xl:text-[18rem] 2xl:text-[23rem]      font-light tracking-tightest   `}
                >
                  Designer
                </h1>{' '}
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center  "
                style={{ nameScale }}
              >
                {' '}
                <div className={nicone.className}>
                  <p className="text-[#d124b4] text-7xl md:text-[7rem] sm:text-8xl lg:text-[8rem] xl:text-[10rem]  2xl:text-[13rem] whitespace-nowrap ">
                    Rain Ruan{' '}
                  </p>
                </div>
              </motion.div>{' '}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute top-[calc(6rem+80vh)] "
          style={{ opacity }}
        >
          <DownArrow />
        </motion.div>
        {/* text */}
        <div className="relative flex flex-col justify-center items-center ">
          {' '}
          <div
            id="text"
            className="h-vh md:h-[calc(100vh-6rem)] lg:w-1/2 flex flex-col gap-8 px-10  md:px-12 lg:px-1 justify-center relative z-10 overflow-clip "
          >
            {' '}
            <div ref={introRef}>
              <motion.h1
                initial={{ opacity: 0, y: '50%' }}
                animate={isIntroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`${barlow.className} text-4xl md:text-6xl  origin-bottom-left `}
              >
                Limitless creativity transcends knowledge boundaries
              </motion.h1>
            </div>
            <div ref={welcomeRef}>
              <motion.p
                initial={{ opacity: 0, y: '50%' }}
                animate={isWelcomeInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-lg md:text-2xl font-bold"
              >
                Welcome! I&apos;m thrilled to have you here.
              </motion.p>
            </div>
            <div ref={contentRef} className="flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0, y: '50%' }}
                animate={isContentInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-sm md:text-xl text-justify"
              >
                I&apos;m passionate about creating, whether it&apos;s crafting
                websites, developing software, designing graphics, composing
                music, or producing videos. My skills are diverse and adaptable,
                allowing me to bring creativity to any project.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: '50%' }}
                animate={isContentInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="text-sm md:text-xl text-justify"
              >
                I&apos;m currently open to new opportunities, whether it&apos;s
                a part-time or full-time position, or a freelance project, big
                or small. I&apos;m eager to collaborate and bring your ideas to
                life.
              </motion.p>
              <div
                ref={skillTagRef}
                className="flex gap-1 md:gap-4 flex-wrap cursor-pointer md:w-[70vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: '50%' }}
                    animate={isSkillTagRefInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 1, duration: 0.2 }}
                    key={index}
                    className="rounded p-2 text-xs md:text-sm  bg-black text-white hover:bg-white hover:text-black font-semibold"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: '50%' }}
                animate={isContentInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-sm md:text-xl font-bold"
              >
                Let&apos;s create something amazing together!
              </motion.p>
            </div>
            <div ref={buttonRef}>
              <motion.div
                className="w-full flex gap-4 mb-2"
                initial={{ opacity: 0, y: '50%' }}
                animate={isButtonInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Link href="/portfolio">
                  <button
                    className={`p-3 md:p-4 rounded-full bg-black text-[#E6F14A] text-sm md:text-xl font-semibold hover:bg-[#E6F14A] hover:text-black transition-all duration-300`}
                  >
                    View My Work
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="p-3 md:p-4 rounded-full ring-1 ring-[#E6F14A] text-sm md:text-xl font-bold hover:text-[#E6F14A] hover:bg-white  transition-all duration-300 hover:ring-white">
                    Contact me
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton bgcolor="#E6F14A" />
    </motion.div>
  )
}

export default Homepage
