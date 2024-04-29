'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'
import Footer from './footer'
import { Stalemate } from 'next/font/google'

const nicone = Stalemate({ subsets: ['latin'], weight: '400' })

const TransitionProvider = ({ children }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      {' '}
      <div key={pathName} className="w-screen h-auto area">
        <div className="fixed radial-gradient-lime w-full h-full  -z-20"></div>
        <div className="fixed radial-gradient-blue w-full h-full  -z-20"></div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40 "
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-5xl md:text-8xl cursor-default w-fit h-fit uppercase text-[#E6F14A] font-bold hidden md:block z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        >
          {pathName.substring(1) || (
            <div className={nicone.className}>
              <p className="text-[#E6F14A] text-7xl md:text-[7rem] sm:text-8xl lg:text-[8rem] xl:text-[10rem]  2xl:text-[13rem] whitespace-nowrap capitalize">
                Rain Ruan
              </p>
            </div>
          )}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30 "
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.8 } }}
        />

        <div className="h-24 ">
          <Navbar />
        </div>
        <div className=" md:h-auto z-20">
          {children}
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
