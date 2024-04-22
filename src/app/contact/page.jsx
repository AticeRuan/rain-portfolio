'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const text = 'Say Hello!'
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)
  }
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-2 md:pt15">
        {/* text container */}
        <div className="min-h-1/2 my-20 lg:my-0 lg:w-1/2 flex items-center justify-center text-6xl font-bold">
          <motion.div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {/* form container */}
        <motion.div
          className="h-full lg:w-1/2 bg-red-50/30 shadow-lg ring-1 ring-black/5  rounded-xl backdrop-blur-md flex items-center justify-center lg:mt-[15vh]"
          initial={{ y: '100vh' }}
          animate={{ y: '0' }}
          transition={{ duration: 1, delay: 1 }}
        >
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="text-lg md:text-lg flex flex-col gap-20 justify-center p-20 md:p-24 z-50"
          >
            <span>Dear Rain,</span>
            <textarea
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span>My email address is:</span>
            <input
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-b-2 border-b-black outline-none z-50"
            />
            <span>Regards</span>
            <button className="bg-[#E6F14A] rounded font-semibold text-gray-800 p-4">
              Send
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
