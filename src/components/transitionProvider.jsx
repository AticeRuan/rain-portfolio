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
    <>
      {' '}
      <AnimatePresence>
        <div key={pathName} className="w-screen h-auto area">
          <motion.div
            className="absolute  top-0 bottom-0 right-full h-screen w-screen z-30 rounded-r-[100px] bg-[#E6F14A]"
            initial={{
              x: '100%',
              width: '100%',
              borderTopRightRadius: 'none',
              borderBottomRightRadius: 'none',
            }}
            animate={{
              x: 0,
              width: '0',
              borderTopRightRadius: '100px',
              borderBottomRightRadius: '100px',
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute  top-0 bottom-0 right-full h-screen w-screen z-20 rounded-r-[100px] bg-[#ececec]"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: 0, width: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute  top-0 bottom-0 right-full h-screen w-screen  rounded-r-[100px] z-10 bg-[#2d2d2d]"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: 0, width: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
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
    </>
  )
}

export default TransitionProvider
