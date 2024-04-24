'use client'
import React, { useState, useEffect } from 'react'
import { Close } from './svg/expand'
import { color } from 'framer-motion'

const BackToTopButton = ({ bgcolor = '#cace64' }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY

    // Set visibility based on scroll position
    setIsVisible(scrollTop > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    document.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      //   color="#478c07"
      aria-label="back-to-top"
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'block' : 'none',
      }}
      className={`fixed bottom-4 md:bottom-11 md:right-11 right-4 w-fit h-fit p-2 md:p-4 shadow-lg hover:shadow-2xl opacity-70 rounded-full flex flex-col items-center justify-center z-50 bg-[${bgcolor}]`}
    >
      <Close />
    </button>
  )
}

export default BackToTopButton
