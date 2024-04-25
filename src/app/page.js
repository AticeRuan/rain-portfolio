'use client'
import DownArrow from '@/components/svg/downArrow'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Stalemate } from 'next/font/google'

const nicone = Stalemate({ subsets: ['latin'], weight: '400' })

const Homepage = () => {
  const targetRef = useRef()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const nameScale = useTransform(scrollYProgress, [0, 0.5], [1, 1])

  return (
    <motion.div
      className="h-full "
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full justify-center items-center ">
        {/* wrapper */}
        <motion.div
          className="relative h-screen "
          ref={targetRef}
          style={{ opacity }}
        >
          {' '}
          {/* title */}
          <motion.div className="fixed mt-[40vh]">
            <div className="relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center flex-col font-black"
                style={{ scale }}
              >
                <h1 className="text-8xl sm:text-[10rem] md:text-[11rem] lg:text-[16rem] xl:text-[18rem] 2xl:text-[23rem]  text-[#4895d7]   leading-3 tracking-tightest backdrop-blur-md opacity-80 text-shadow">
                  Developer
                </h1>
                <h1 className="text-8xl sm:text-[10rem] md:text-[11rem] lg:text-[16rem] xl:text-[18rem] 2xl:text-[23rem] font-black tracking-tightest   text-[#4895d7] text-shadow">
                  Designer
                </h1>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center  "
                style={{ nameScale }}
              >
                {' '}
                <div className={nicone.className}>
                  <p className="text-[#E6F14A] text-7xl md:text-[7rem] sm:text-8xl lg:text-[8rem] xl:text-[10rem]  2xl:text-[13rem] whitespace-nowrap ">
                    Rain Ruan{' '}
                  </p>
                </div>
              </motion.div>
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
        <div
          id="text"
          className="h-vh md:h-[calc(100vh-6rem)] lg:w-1/2 flex flex-col gap-8 px-10  md:px-12 lg:px-1 justify-center relative z-10 overflow-clip text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Limitless creativity transcends knowledge boundaries
          </h1>
          <p className="text-lg md:text-xl">
            Welcome! I&apos;m thrilled to have you here.
          </p>
          <p className="text-sm md:text-xl">
            I&apos;m passionate about creating, whether it&apos;s crafting
            websites, developing software, designing graphics, composing music,
            or producing videos. My skills are diverse and adaptable, allowing
            me to bring creativity to any project.
          </p>
          <p className="text-sm md:text-xl">
            I&apos;m currently open to new opportunities, whether it&apos;s a
            part-time or full-time position, or a freelance project, big or
            small. I&apos;m eager to collaborate and bring your ideas to life.
          </p>
          <p className="text-sm md:text-xl">
            Let&apos;s create something amazing together!
          </p>
          <div className="w-full flex gap-4 mb-2">
            <Link href="/portfolio">
              <button className="p-3 md:p-4 rounded-lg ring-1 ring-black bg-black text-[#E6F14A] text-sm md:text-xl">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-3 md:p-4 rounded-lg ring-1 ring-[#E6F14A] text-sm md:text-xl font-bold">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
