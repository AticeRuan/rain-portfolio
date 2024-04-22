import React from 'react'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className=" flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-sm mt-10 ">
      Copyright © Rain Ruan {year}
    </div>
  )
}

export default Footer
