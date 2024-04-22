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
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full justify-center items-center">
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
                <h1 className="text-8xl sm:text-[10rem] md:text-[13rem] lg:text-[16rem] xl:text-[21rem] 2xl:text-[23rem]  text-[#4895d7]   leading-3 tracking-tightest backdrop-blur-md opacity-80 text-shadow">
                  Developer
                </h1>
                <h1 className="text-8xl sm:text-[10rem] md:text-[13rem] lg:text-[16rem] xl:text-[21rem] 2xl:text-[23rem] font-black tracking-tightest   text-[#4895d7] text-shadow">
                  Designer
                </h1>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center  "
                style={{ nameScale }}
              >
                {' '}
                <div className={nicone.className}>
                  <p className="text-[#cace64] text-5xl md:text-[7rem] sm:text-8xl lg:text-[8rem] xl:text-[10rem]  2xl:text-[13rem] whitespace-nowrap">
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
        <div className="h-[calc(100vh-6rem)] lg:w-1/2 flex flex-col gap-8 px-6 sm:px-8 md:px-12 lg:px-1 justify-center relative z-10 overflow-clip text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Limitless creativity transcends knowledge boundaries
          </h1>
          <p>
            I love to create and find it comfortable and secure to work within
            sensible guidelines or structures. Software development is in line
            with my spiritual order - to perform routine or standardized tasks
            using creative thinking and problem-solving skills. I feel grounded
            and joyful by adhering to the logical constructs of programming
            languages while unleashing my creativity. Experimenting with
            different approaches and ultimately discovering solutions fills me
            with exhilaration.{' '}
          </p>
          <p>
            Therefore, it has become my passion, my hobby, and will be my
            career.
          </p>
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-blac">
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
