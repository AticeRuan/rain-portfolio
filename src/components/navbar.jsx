'use client'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navlink'
import { motion } from 'framer-motion'
import Github from './svg/github'
import LinkedIn from './svg/linkedIn'
import Email from './svg/email'
import Logo from './svg/logo'
import { Barlow } from 'next/font/google'
import { usePathname } from 'next/navigation'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'
import Loader from './Loader'
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['200', '400', '600', '900'],
})
const links = [
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
]
const mobileLinks = [
  { url: '/', title: 'Home' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
]

const topVariants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 45,
    backgroundColor: '#cace64',
  },
}
const centreVariants = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
}

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: -45,
    backgroundColor: '#cace64',
  },
}

const listVariants = {
  closed: {
    x: '100vw',
  },
  open: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

const listItemVariants = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 0,
  },
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isLoading, setIsLoading] = useState(true)
  const pdfUrl = '/assets/CV_Rain_Ruan_2024.pdf'
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <>
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg z-[100] ">
        {/* md screen menu */}
        <div className="hidden z-0 md:z-10 md:flex w-1/3 md:w-[80%] 2xl:w-1/3 gap-12 items-center ">
          <Link
            href="/"
            className="h-fit flex text-sm bg-black rounded-md p-1 font-semibold items-center justify-center group w-[108px] relative"
          >
            <span className="w-12 h-8 flex items-center justify-center text-[#E6F14A] group-hover:bg-white group-hover:text-black group-hover:rounded transition-all duration-300">
              Rain
            </span>
            <span className="w-12 h-8 flex items-center justify-center text-black bg-white rounded group-hover:text-[#E6F14A] group-hover:bg-black transition-all duration-300">
              Ruan
            </span>
            {!isHome && (
              <span
                className={`transition-all duration-500 absolute -bottom-8 -right-10 bg-[#f5f1d0] p-2 rounded-b-lg rounded-tr-lg ${barlow.className} group-hover:opacity-80 opacity-0 text-sm`}
              >
                Back to Home
              </span>
            )}
          </Link>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        {/* logo */}
        <div className="md:hidden lg:flex lg:w-1/4 xl:justify-center ml-0 md:m-20 top-5 left-4 ">
          <Link href="/" className="block md:hidden z-10 md:z-0">
            <Logo />
          </Link>
        </div>
        {/* Social links */}
        <div className="hidden lg:flex text-xs gap-4 items-center justify-center w-1/3">
          <button className="text-xl hover:animate-pulse" onClick={onOpen}>
            Resume
          </button>
          <Link href="https://github.com/AticeRuan">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/rain-ruan/">
            <LinkedIn />
          </Link>
          <Link href="mailto:rainryy@gmail.com">
            <Email />
          </Link>
        </div>
        <div className="hidden md:flex lg:hidden text-xs gap-2 items-center justify-end w-1/3">
          <button className="font-bold" onClick={onOpen}>
            Resume
          </button>
          <Link href="https://github.com/AticeRuan">
            <Github width="20" height="auto" />
          </Link>
          <Link href="https://www.linkedin.com/in/rain-ruan/">
            <LinkedIn width="25" height="auto" />
          </Link>
          <Link href="mailto:rainryy@gmail.com">
            <Email width="25" height="auto" />
          </Link>
        </div>
        {/* Responsive menu */}
        <div className=" md:hidden ">
          {/* hamburger */}

          <button
            className="w-10 h-8 flex flex-col justify-between  z-50 fixed top-4 right-4 "
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              className="w-10 h-1 bg-black rounded origin-left "
              variants={topVariants}
              animate={open ? 'open' : 'closed'}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-[black] rounded"
              variants={centreVariants}
              animate={open ? 'open' : 'closed'}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-black rounded origin-left"
              variants={bottomVariants}
              animate={open ? 'open' : 'closed'}
            ></motion.div>
          </button>

          {/* menu list */}
          {open && (
            <motion.div
              className="fixed top-0 left-0 w-screen h-screen bg-black text-[#E6F14A] flex flex-col items-center justify-center gap-8 text-4xl z-40"
              variants={listVariants}
              initial="closed"
              animate="open"
            >
              {mobileLinks.map((link) => (
                <motion.div key={link.url} variants={listItemVariants}>
                  <Link
                    href={link.url}
                    className={`z-40 ${barlow.className}`}
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        placement="center"
        size="4xl"
        motionProps={{
          variants: {
            enter: {
              transformOrigin: 'center',
              height: 'fit-content',
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              transformOrigin: 'center',
              height: 0,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 radial-gradient-blue">
                Resume
              </ModalHeader>
              <ModalBody className="radial-gradient-lime">
                <div className="relative w-full h-[70vh]  bg-white">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader />
                    </div>
                  )}
                  <iframe
                    src={`${pdfUrl}#toolbar=0`}
                    className="w-full h-full border-0 rounded"
                    onLoad={() => setIsLoading(false)}
                    title="PDF Viewer"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-black bg-[#E6F14A] hover:text-[#E6F14A] hover:bg-black transition-all duration-700 font-semibold"
                  onClick={() => window.open(pdfUrl, '_blank')}
                >
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Navbar
