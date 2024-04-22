'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Circle from '@/components/svg/circle'
import Image from 'next/image'
import DownArrow from '@/components/svg/downArrow'
import Raindrop from '@/components/raindrop'
import img from '../../../public/assets/dev04.JPG'

//portfolio data
const developmentItems = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'MERN Stack App',
    desc: 'Full stack MERN application with JWT authentication, CRUD operations, and RESTful API.',
    img: '/assets/dev04.JPG',
    link: 'https://lama.dev',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Next.js Medium Blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/',
    link: 'https://lama.dev',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Vanilla Book App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/',
    link: 'https://lama.dev',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Spotify Music App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/',
    link: 'https://lama.dev',
  },
]

const Portfolio = () => {
  const sectionOneRef = useRef()
  const { scrollYProgress: sectionOneScrollYProgress } = useScroll({
    target: sectionOneRef,
  })
  const sectionOneX = useTransform(
    sectionOneScrollYProgress,
    [0, 1],
    ['0%', '-80%'],
  )

  const sectionTwoRef = useRef()
  const { scrollYProgress: sectionTwoScrollYProgress } = useScroll({
    target: sectionTwoRef,
  })
  const sectionTwoX = useTransform(
    sectionTwoScrollYProgress,
    [0, 1],
    ['0%', '-80%'],
  )
  const sectionThreeRef = useRef()
  const { scrollYProgress: sectionThreeScrollYProgress } = useScroll({
    target: sectionThreeRef,
  })
  const sectionThreeX = useTransform(
    sectionThreeScrollYProgress,
    [0, 1],
    ['0%', '-80%'],
  )

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={sectionOneRef}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-2 items-center justify-center text-8xl text-center">
          <div className="flex flex-col ">
            <span className="text-sm md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit ">
              My works
            </span>
            <h1 className="font-bold text-4xl md:text-7xl 2xl:text-9xl">
              Development
            </h1>
          </div>

          <DownArrow />
          <Raindrop />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div className="flex" style={{ x: sectionOneX }}>
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
            ></div>
            {developmentItems.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                style={{ x: sectionOneX }}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relateive">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} alt="" fill />
                    </div>
                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>{' '}
      </div>{' '}
      <div className="h-[600vh] relative" ref={sectionTwoRef}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-2 items-center justify-center text-8xl text-center">
          <div className="flex flex-col ">
            <span className="text-sm md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit ">
              My works
            </span>
            <h1 className="font-bold text-4xl md:text-7xl 2xl:text-9xl">
              Design
            </h1>
          </div>

          <DownArrow />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div className="flex" style={{ x: sectionTwoX }}>
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
            ></div>
            {developmentItems.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                style={{ x: sectionTwoX }}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relateive">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src="/" alt="" fill />
                    </div>
                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>{' '}
      </div>
      <div className="h-[600vh] relative" ref={sectionThreeRef}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-2 items-center justify-center text-8xl text-center">
          <div className="flex flex-col ">
            <span className="text-sm md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit ">
              My works
            </span>
            <h1 className="font-bold text-4xl md:text-7xl 2xl:text-9xl">
              Media Production
            </h1>
          </div>

          <DownArrow />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div className="flex" style={{ x: sectionThreeX }}>
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
            ></div>
            {developmentItems.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                style={{ x: sectionThreeX }}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relateive">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src="/" alt="" fill />
                    </div>
                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>{' '}
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl mx-10 md:text-7xl font-bold ">
          Let&apos;s talk about your project!
        </h1>
        <div className="relative">
          <div className="">
            <Circle />
          </div>
          <button></button>
          <Link
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-[#cace64] rounded-full font-bold flex items-center justify-center z-40"
            href="/contact"
          >
            <button>Email me</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
