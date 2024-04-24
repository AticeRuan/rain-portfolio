'use client'
import React, { useState, useEffect } from 'react'
import { Close } from './svg/expand'

const BackToTopButton = () => {
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
      className="fixed bottom-4 right-4 w-fit h-fit p-1 bg-[#cace64] opacity-70 rounded-full flex flex-col items-center justify-center z-50 "
    >
      <Close />
    </button>
  )
}

export default BackToTopButton
