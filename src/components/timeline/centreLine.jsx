import React from 'react'

const CentreLine = () => {
  return (
    <div className="w-1/6 flex justify-center">
      {/* LINE */}
      <div className="w-1 h-full bg-gray-600 rounded relative">
        {/* LINE CIRCLE */}
        <div className="absolute w-2 h-2 md:w-5 md:h-5 rounded-full ring-4 ring-red-400 bg-white -left-[2px] md:-left-2 top-10"></div>
      </div>
    </div>
  )
}

export default CentreLine
