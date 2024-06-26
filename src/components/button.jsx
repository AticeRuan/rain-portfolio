import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <div className="border w-full h-40 flex items-center justify-center">
      <a
        href="#_"
        className="relative px-5 py-3 overflow-hidden font-bold text-white bg-tranparent border-none hover:border border-gray-100 rounded-lg shadow-inner group bg-[#cace64] "
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-none hover:border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 text-black group-hover:text-[#cace64] ease">
          Button
        </span>
      </a>
    </div>
  )
}

export default Button
