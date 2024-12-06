import React from 'react'
import Image from 'next/image'
import { Barlow } from 'next/font/google'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'
import Link from 'next/link'
import Figma from './svg/figma'
import Github from './svg/github'
import Website from './svg/website'
import Youtube from './svg/youtube'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['200', '400', '600', '900'],
})
const PortfolioItem = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const renderIconByLink = (site) => {
    if (site === 'figma') return <Figma />
    else if (site === 'github') return <Github />
    else if (site === 'website') return <Website />
    else if (site === 'youtube') return <Youtube />
    else return null
  }
  return (
    <>
      <div
        className=" flex flex-col gap-3 items-center justify-center group hover:cursor-pointer w-[300px] h-[300px]"
        onClick={onOpen}
      >
        {data.category !== 'media' ? (
          <Image
            src={data.img}
            alt="portfolio item"
            width={800}
            height={600}
            className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-[0.8s] hover:cursor-pointer w-[500px] h-[200px] bg-white"
          />
        ) : (
          <iframe
            className="hover:filter-none filter brightness-50 h-[200px] group-hover:scale-105 ransition-transform duration-[0.8s] hover:cursor-pointer rounded-lg object-cover "
            src={data.img}
          ></iframe>
        )}
        <p className={`${barlow.className} capitalize text-sm text-center`}>
          {data.title}
        </p>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        backdrop="blur"
        placement="bottom-center"
        scrollBehavior="outside"
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
        classNames={{
          body: 'py-6 max-h-[80vh] overflow-y-auto',
          backdrop: 'bg-[#292f46]/50 backdrop-opacity-40',
          base: 'max-h-[90vh]',
          //   base: 'border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]',
          //   header: 'border-b-[1px] border-[#292f46]',
          //   footer: 'border-t-[1px] border-[#292f46]',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-4 radial-gradient-blue">
                <p className="captalize text-xl">{data.title}</p>
                {
                  <p className="text-sm uppercase text-white animate-pulse bg-[#cace64] w-fit py-1 px-2  rounded-tl-lg rounded-br-lg">
                    {data.category === 'media'
                      ? 'media production'
                      : data.category}
                  </p>
                }
              </ModalHeader>
              <ModalBody className="radial-gradient-lime flex flex-col gap-10 overflow-y-auto ">
                {data.category !== 'media' ? (
                  <Image
                    src={data.img}
                    alt="portfolio item"
                    width={800}
                    height={600}
                    className="rounded-lg object-contain  "
                  />
                ) : (
                  <iframe
                    className="  rounded-lg h-[300px] object-contain "
                    src={data.img}
                  ></iframe>
                )}
                {data.hashtag && (
                  <p className="text-[#7c7f1b] font-semibold">{data.hashtag}</p>
                )}
                <p>{data.desc}</p>
                <div className="flex gap-3 flex-wrap">
                  {data.skills.map((skill, index) => (
                    <div
                      className="rounded p-2 text-[.6rem]  bg-black md:text-[.8rem] text-[#cace64] hover:bg-[#cace64] hover:text-black font-semibold"
                      key={index}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter className="">
                {data.link.map((link) => (
                  <Link
                    href={link.url}
                    key={link.url}
                    className="flex justify-end items-center gap-4 w-7"
                  >
                    {renderIconByLink(link.site)}
                  </Link>
                ))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PortfolioItem
