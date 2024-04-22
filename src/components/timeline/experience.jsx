import React from 'react'

const Experience = ({ experience }) => {
  return (
    <div className="w-1/3 ">
      {/* JOB TITLE */}
      <div className="bg-white p-3 font-semibold  rounded-lg md:text-base text-sm w-fit">
        {experience.title}
      </div>
      {/* JOB DESC */}
      <div className="p-3 md:text-sm normal-case text-[.8rem]">
        {experience.desc.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </div>
      {/* JOB DATE */}
      <div className="p-3 text-red-400 md:text-sm font-semibold  text-[.8rem]">
        {experience.date}
      </div>
      {/* JOB COMPANY */}
      <div className="p-1 rounded bg-white text-[0.6rem] font-semibold w-fit">
        {experience.company}
      </div>
    </div>
  )
}

export default Experience
