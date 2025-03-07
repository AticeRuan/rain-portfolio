'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Circle from '@/components/svg/circle'

import BackToTopButton from '@/components/backToTopButton'
import { Barlow } from 'next/font/google'
import useRead from '@/hooks/useRead'
import PortfolioItem from '@/components/PortfolioItem'
import Loader from '@/components/Loader'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['200', '400', '600', '900'],
})
const Portfolio = () => {
  const { data, loading, error, refetch } = useRead()
  const [activeFilter, setActiveFilter] = useState('all')
  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    return dateB - dateA
  })

  const filteredData = sortedData.filter((item) => {
    if (activeFilter === 'all') return true
    return item.category === activeFilter
  })

  const filterButtons = [
    { label: 'All', value: 'all' },
    { label: 'Development', value: 'development' },
    { label: 'Design', value: 'design' },
    { label: 'Media Production', value: 'media' },
  ]

  return (
    <>
      <motion.div
        className="h-full flex flex-col items-center justify-center overflow-x-hidden w-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2.2 }}
      >
        <div className="w-[90vw]  flex items-start justify-center mx-3 flex-col mt-10 gap-10">
          <h1
            className={`${barlow.className} text-8xl sm:text-[10rem] md:text-[11rem] lg:text-[16rem]    font-light tracking-tightest  `}
          >
            Portfolio
          </h1>
          <p
            className={`${barlow.className} text-lg md:text-xl w-10/12 xl:w-3/5 md:ml-10 `}
          >
            I specialize in creating intuitive digital experiences, blending
            full-stack development, UX/UI design, and multimedia production. I
            focus on delivering functional, creative solutions that provide
            seamless, engaging user experiences across mobile apps, websites,
            and visual assets. Explore my work and discover more!
          </p>

          {loading ? (
            <div className="w-full flex items-center justify-center py-10">
              <Loader />
            </div>
          ) : error ? (
            <motion.div className="w-full flex flex-col gap-2 items-center justify-center py-10 shadow-lg ring-1 ring-black/5  rounded-xl backdrop-blur-md">
              <p
                className={`${barlow.className} flex flex-col gap-1 font-[600] text-xl`}
              >
                Opps...Something went wrong....x_x
              </p>
              <button
                onClick={() => refetch()}
                className="bg-black text-[#E6F14A] p-2 rounded-lg font-semibold hover:bg-[#E6F14A] hover:text-black transition-all duration-500"
              >
                Retry
              </button>
            </motion.div>
          ) : (
            <>
              {' '}
              <div className="flex  items-center justify-center text-center gap-2 md:gap-6  md:ml-10">
                {filterButtons.map((button) => (
                  <button
                    key={button.value}
                    onClick={() => setActiveFilter(button.value)}
                    className={`rounded-lg p-2 text-[.6rem] md:text-[.8rem] font-semibold transition-colors duration-200 ${
                      activeFilter === button.value
                        ? 'bg-[#cace64] text-black'
                        : 'bg-black text-[#cace64] hover:bg-[#cace64] hover:text-black'
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
              <motion.div
                className="grid lg:w-[80vw] w-[90vw] xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 md:ml-10 justify-items-center 2xl:grid-cols-4  "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {filteredData.map((item) => (
                  <PortfolioItem key={item._id} data={item} />
                ))}
              </motion.div>
            </>
          )}
        </div>
        {/* last screen */}
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className={`text-4xl mx-10 md:text-7xl  ${barlow.className}`}>
            Let&apos;s talk about your project!
          </h1>
          <div className="relative">
            <Circle />

            <Link
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-[#E6F14A] rounded-full font-bold flex items-center justify-center z-30"
              href="/contact"
            >
              <button>Email me</button>
            </Link>
          </div>
        </div>
        <BackToTopButton bgcolor="#E6F14A" />{' '}
      </motion.div>
    </>
  )
}

export default Portfolio
