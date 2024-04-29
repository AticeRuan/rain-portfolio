import React from 'react'
import { motion } from 'framer-motion'
const Circle = () => {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
      viewBox="0 0 300 300"
      className="w-80 h-80 md:w-[500px] md:h-[500px] "
    >
      <defs>
        <path
          id="circlePath"
          d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
        />
      </defs>
      <text fill="#000000">
        <textPath xlinkHref="#circlePath" className="text-xl">
          Full Stack Developer and UI Designer{' '}
        </textPath>
      </text>
    </motion.svg>
  )
}

export default Circle
