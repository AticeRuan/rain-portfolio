'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'
import Footer from './footer'

const TransitionProvider = ({ children }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      {' '}
      <div
        key={pathName}
        className="w-screen h-auto bg-gradient-to-b from-blue-50 to-red-100 area"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit uppercase font-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {pathName.substring(1) || 'Home'}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] z-30 bottom-0"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.8 } }}
        />

        <div className="h-24 ">
          <Navbar />
        </div>
        <div className=" md:h-auto">
          {children}
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
