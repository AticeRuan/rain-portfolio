'use client'
import { motion } from 'framer-motion'
const SingleDrop = () => {
  return (
    <motion.div
      className="w-25 h-25  bg-black rounded-[0%_50%_50%_50%] rotate-[45deg] z-20 "
      //   initial={{ rotate: 0, borderRadius: '50%' }}
      //   animate={{ rotate: 360, borderRadius: '0% 50% 50% 50%' }}
      //   transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export default SingleDrop
