import React from 'react'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className=" flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-sm my-10 ">
      © {year} Rain Ruan @ Chill Otters. All rights reserved.
    </div>
  )
}

export default Footer
