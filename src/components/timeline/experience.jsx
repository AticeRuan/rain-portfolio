import React from 'react'

const Experience = ({ experience }) => {
  return (
    <div className="w-[80vw] sm:w-1/3 ">
      {/* JOB TITLE */}
      <div className="bg-white p-3 font-semibold text-black  rounded-lg md:text-base text-sm w-fit">
        {experience.title}
      </div>
      {/* JOB DESC */}
      <div className="p-3 md:text-sm normal-case text-[.8rem]">
        {experience.desc.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </div>
      {/* JOB DATE */}
      <div className="p-3 text-[#cace64] md:text-sm font-semibold  text-[.8rem]">
        {experience.date}
      </div>
      {/* JOB COMPANY */}
      <div className="p-1 rounded bg-white text-[0.8rem] font-semibold w-fit text-black">
        {experience.company}
      </div>
      <hr className="text-white mt-5 mb-5 md:hidden"></hr>
    </div>
  )
}

export default Experience
