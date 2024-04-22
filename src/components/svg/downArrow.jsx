import React from 'react'
import { motion } from 'framer-motion'
const DownArrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 0 }}
      animate={{ opacity: 1, y: '10px' }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      }}
      className=" flex items-center justify-center flex-col gap2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 200 200"
        fill="white"
      >
        <path
          d="M62.5 37.5L71.3375 28.6625L93.75 51.075V0H106.25V51.075L128.663 28.6625L137.5 37.5L100 75L62.5 37.5Z"
          fill="white"
        />
        <path
          d="M137.5 100C137.507 95.0743 136.54 90.1958 134.656 85.6449C132.771 81.0939 130.006 76.9602 126.519 73.4812L100 100L73.4813 73.4812C69.1212 77.8421 65.9038 83.2108 64.1141 89.112C62.3244 95.0131 62.0176 101.265 63.2208 107.313C64.424 113.361 67.1002 119.019 71.0123 123.785C74.9244 128.552 79.9516 132.281 85.6488 134.641C91.3459 137.001 97.5371 137.919 103.674 137.315C109.811 136.711 115.704 134.603 120.832 131.177C125.959 127.751 130.163 123.114 133.07 117.676C135.978 112.238 137.499 106.167 137.5 100Z"
          fill="white"
        />
        <path
          d="M187.5 100C187.507 88.51 185.244 77.1318 180.841 66.5188C176.438 55.9058 169.982 46.2671 161.844 38.1562L153.006 46.9938C163.503 57.4797 170.653 70.8433 173.553 85.3939C176.453 99.9445 174.973 115.028 169.298 128.737C163.624 142.446 154.011 154.164 141.676 162.408C129.34 170.653 114.837 175.054 100 175.054C85.1632 175.054 70.6597 170.653 58.3243 162.408C45.989 154.164 36.3761 142.446 30.7018 128.737C25.0274 115.028 23.5466 99.9445 26.4466 85.3939C29.3467 70.8433 36.4972 57.4797 46.9937 46.9938L38.1562 38.1562C27.984 48.3298 20.4778 60.855 16.3026 74.6224C12.1274 88.3898 11.412 102.974 14.2198 117.084C17.0275 131.194 23.2719 144.394 32.3996 155.514C41.5273 166.634 53.2567 175.332 66.5487 180.836C79.8407 186.34 94.2851 188.482 108.602 187.07C122.919 185.658 136.668 180.738 148.629 172.744C160.59 164.75 170.395 153.929 177.175 141.24C183.955 128.552 187.502 114.387 187.5 100Z"
          fill="white"
        />
      </svg>
      <p className="text-xs text-white">scroll down</p>
    </motion.div>
  )
}

export default DownArrow
