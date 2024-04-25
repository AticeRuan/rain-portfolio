'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Circle from '@/components/svg/circle'
import Image from 'next/image'
import DownArrow from '@/components/svg/downArrow'
import Raindrop from '@/components/raindrop'
import img from '../../../public/assets/dev04.JPG'
import Figma from '@/components/svg/figma'
import Github from '@/components/svg/github'
import Website from '@/components/svg/website'
import Youtube from '@/components/svg/youtube'
import MobilePortfolio from '@/components/mobilePortfolio'
import BackToTopButton from '@/components/backToTopButton'

//portfolio data
const developmentItems = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Jinsook Taylor Web Gallery',
    desc: 'Full-stack MERN application that showcases the delightful artwork and handmade goods of a local Taupo-based business. Inspired by children illustrations, fairytale themes, and abstract expressions, Jinsook Taylors creations are infused with imagination and creativity. The application features JWT authentication, allowing users to securely access the platform. With CRUD operations and a RESTful API, users can explore the collection of personalized art paints, illustrations, and handmade goods. Each piece of artwork is meticulously crafted to evoke wonder and delight, making them perfect for children spaces, storytelling, or as unique decorative pieces.',
    img: '/assets/dev02.JPG',
    hashtag: '#Under Construction',
    link: [
      {
        url: 'https://www.figma.com/proto/tBx94bCPuMNybD9EzGWsAs/Jinsook_website?node-id=14-238&starting-point-node-id=10%3A82&mode=design&t=soedmJuIIsUHSqi7-1',
        site: 'figma',
      },
    ],
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'RESTful API',
      'Tailwind Css',
      'Figma',
      'App Depolyment',
    ],
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Isa Kamera Web App',
    desc: 'The client is a food photographer and wants a site to showcase her work at a low cost. Considering the ongoing need to update her portfolio, I designed this React.js web app. It integrates with Firebase Firestore, storage, and authentification, allowing clients to perform CRUD to content.',
    img: '/assets/dev04.JPG',
    link: [
      {
        url: 'https://isakamera.com/',
        site: 'website',
      },
      {
        url: 'https://github.com/AticeRuan/isakamera-webapp-firebase-react',
        site: 'github',
      },
    ],
    skills: [
      'React.js',
      'Firebase',
      'Firestore',
      'Authentification',
      'Material-UI',
      'App Depolyment',
    ],
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Otter Tots Learning App',
    desc: 'Revised and updated an outdated UWP game to an interactive and inspiring kids learning App. Implemented foundational programming elements such as variables, loops, conditionals, and functions. These are essential for core logic within the application. Went beyond the basics by integrating more complex programming concepts, such as asynchronous operations, exception handling, and custom data structures such as Array, List, and Dictionary. Visual elements are manipulated in response to game events. For example, images and text are changed to represent the game state, such as displaying correct or incorrect answers. This demonstrates the manipulation of the visual representation of the application state.',
    img: '/assets/dev03.JPG',
    link: [
      {
        url: 'https://github.com/AticeRuan/OtterTots',
        site: 'github',
      },
    ],
    skills: ['C#', 'Visual Studio', 'UWP', 'XAML'],
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Health Lounge Papamoa Website',
    desc: 'The project involved collaborating with a health therapist client to develop a website that focuses on embodying the spirit of Huangdi Neijing, offering visitors a serene and informative online space. As part of the project, I created engaging and informative website content that aligns with the cliens practice. Leveraging React and Material-UI, I designed, developed, and deployed the website, ensuring a seamless and intuitive user experience. ',
    img: '/assets/dev01.JPG',
    link: [
      {
        url: 'https://healthloungepapamoa.com/',
        site: 'website',
      },
      {
        url: 'https://github.com/AticeRuan/health_shops',
        site: 'github',
      },
    ],
    skills: [
      'React.js',
      'Material-UI',
      'Figma',
      'Content Creation',
      'App Depolyment',
    ],
  },
]
const designItems = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Selene App Prototype ',
    desc: 'I designed and prototyped Selene, a lifestyle mobile application catering to astronomy enthusiasts and moon lovers. Named after the Greek goddess of the moon, Selene offers users detailed moon-related information for each day, presented within a sleek clock app interface. Additionally, Selene features a unique pet simulator component, allowing users to adopt and care for a werewolf within the app. I conceptualized the app and designed its UI using Photoshop and Figma. The prototype was developed using C# and Visual Studio, ensuring a seamless and engaging user experience.',
    img: '/assets/des01.jpg',

    link: [
      {
        url: 'https://www.figma.com/proto/0oHjpbcz4Bqsl6iX5nP95f/Selene?type=design&node-id=1-25&t=dnxASfi07u0qFyT8-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A25&mode=design',
        site: 'figma',
      },
      {
        url: 'https://github.com/AticeRuan/SeleneApp',
        site: 'github',
      },
    ],
    skills: [
      'UX/UI Design',
      'Photoshop',
      'Figma',
      'C#',
      'XAML',
      'Concept Design',
    ],
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Fishy Business Menu Pamphlet Design',
    desc: 'Menu Phmphlet Design for Fishy Business, a local seafood restaurant. The design features a clean and modern layout, with a focus on showcasing the restaurants delicious seafood offerings. The pamphlet includes high-quality images of the restaurants dishes, along with detailed descriptions and pricing information. The design also incorporates the restaurants branding elements, such as logo, color scheme, and typography, to create a cohesive and professional look. The pamphlet is designed to be eye-catching and informative, encouraging customers to explore the restaurants menu and place an order.',
    img: '/assets/des03.png',
    link: [
      {
        url: 'https://www.figma.com/proto/1WLTnXBwwceMHBphVasFA9/Fishy-Business?type=design&node-id=1-4&t=ELzkUIJxWYc1zFRL-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4&mode=design',
        site: 'figma',
      },
    ],
    skills: ['Photoshop', 'Figma'],
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Jinsook Taylor Business Card Design',
    desc: 'Business Card Design for Jinsook Taylor, a local artist and illustrator. The design features a whimsical and creative layout, inspired by Jinsook Taylors unique artistic style. ',
    img: '/assets/des02.JPG',
    link: [
      {
        url: 'https://www.figma.com/proto/OLGNxg9cHMXri7BryIKs4S/Jinsook-Business-card?type=design&node-id=602-5&t=ukNgXl3te3TqaCWn-1&scaling=min-zoom&page-id=3%3A2&starting-point-node-id=602%3A5&mode=design',
        site: 'figma',
      },
    ],
    skills: ['Canva', 'Figma'],
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Pin and Grab Sern Stack Project ',
    desc: 'A web platform to connect individual job seekers and clients. Used SERN stack and Docker development environment, as well as agile scrum and kanban methodology. Personal contribution: Conceptualized the core idea of Pin and Grab. Utilized React and MUI for development. Designed and implemented React component structure and styling.',
    img: '/assets/dev05.jpg',
    hashtag: '#Colab Project',
    link: [
      {
        url: 'https://www.youtube.com/watch?v=3p-i7UOus7I',
        site: 'youtube',
      },
      {
        url: 'https://github.com/dev-alt/tradeapp',
        site: 'github',
      },
    ],
    skills: [
      'React.js',
      'Firebase',
      'Firestore',
      'Authentification',
      'Material-UI',
      'App Depolyment',
    ],
  },
]
const mediaItems = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Summer Snow',
    desc: '"Summer Snow" is a musical composition that captures the essence of a fleeting summer moment. With delicate melodies and soothing harmonies, this enchanting piece evokes the tranquility of a summer snowfall. I have also design the cover photo of this song. Song is published on QQ music and NetEase Cloud Music ',

    link: 'https://www.youtube.com/embed/yQ5XPColYVk',
    skills: ['Garage Band', 'Music Composition', 'Photoshop'],
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Sipplus photoshoot scene video',
    desc: 'A short video showcasing the behind-the-scenes process of a photoshoot for Sipplus, a local dry flower company. The video captures the creative energy and collaboration between the photographer, models, and stylists as they work together to create stunning images for the brand. I have taken the role of the director and editor of the video, ensuring that the final product reflects the vision and aesthetic of the brand. Video is adopted on Sipplus social media platform',

    link: 'https://www.youtube.com/embed/IAKogJbPUV8',
    skills: [
      'Filming',
      'Photography',
      'Vidoe Editing',
      'Capcut',
      'Content Creation',
    ],
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Buds After Storm',
    desc: 'Music composition inspired by Nakashima Mika hit song Boku ga Shinou to Omotta no Wa (僕が死のうと思ったのは). The song is about the feeling of hope and resilience after a storm. The music features a J-pop style, creating a unique and emotional listening experience.',

    link: 'https://www.youtube.com/embed/bFXmKAyjGJk',
    skills: ['Music Composition', 'Garaage Band'],
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Experiemntal Perfume Film',
    desc: 'An experimental short film exploring lighting and angle in studio film making. The film combines visual and auditory elements to evoke the feeling of smell and the memories associated with different scents. The film is a production of my home studio, arranged, directed and filmed by myself, with the goal of creating an immersive and engaging experience for viewers and showcasing my own aesthetics',

    link: 'https://www.youtube.com/embed/-eIDvaJf2Go',
    skills: ['Filming', 'Capcut', 'Video Editing'],
  },
]

const href = developmentItems[0].link[0].href
href && console.log(href)

const Portfolio = () => {
  const sectionOneRef = useRef()
  const { scrollYProgress: sectionOneScrollYProgress } = useScroll({
    target: sectionOneRef,
  })
  const sectionOneX = useTransform(
    sectionOneScrollYProgress,
    [0, 1],
    ['0%', '-80%'],
  )

  const sectionTwoRef = useRef()
  const { scrollYProgress: sectionTwoScrollYProgress } = useScroll({
    target: sectionTwoRef,
  })
  const sectionTwoX = useTransform(
    sectionTwoScrollYProgress,
    [0, 1],
    ['0%', '-80%'],
  )
  const sectionThreeRef = useRef()
  const { scrollYProgress: sectionThreeScrollYProgress } = useScroll({
    target: sectionThreeRef,
  })
  const sectionThreeX = useTransform(
    sectionThreeScrollYProgress,
    [0, 1],
    ['0%', '-80%'],
  )

  const renderIconByLink = (site) => {
    if (site === 'figma') return <Figma />
    else if (site === 'github') return <Github />
    else if (site === 'website') return <Website />
    else if (site === 'youtube') return <Youtube />
    else return null
  }
  const smoothScroll = (e, id) => {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <motion.div
        className="h-full  hidden md:block"
        initial={{ y: '-200vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* development */}
        <div className="h-[600vh] relative" ref={sectionOneRef} id="dev">
          <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-2 items-center justify-center text-8xl text-center">
            <div className="flex flex-col ">
              <Link
                href="/portfolio/#media"
                onClick={(e) => smoothScroll(e, 'media')}
              >
                <h1 className="hover:opacity-100 font-bold text-2xl md:text-3xl 2xl:text-5xl text-shadow  opacity-50 mb-5 md:mb-0">
                  Media Production
                </h1>
              </Link>
              <span className="text-[.8rem] md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit ">
                My works
              </span>
              <h1 className="font-bold text-4xl md:text-7xl 2xl:text-9xl text-shadow mb-10 md:mb-20">
                Development
              </h1>{' '}
              <Link
                href="/portfolio/#des"
                onClick={(e) => smoothScroll(e, 'des')}
              >
                <h1 className="hover:opacity-100 font-bold text-2xl md:text-3xl 2xl:text-5xl text-shadow mb-10 opacity-50">
                  Design
                </h1>
              </Link>
            </div>

            <DownArrow />
            <Raindrop />
          </div>
          {/* development mapping */}
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div className="flex  z-50" style={{ x: sectionOneX }}>
              <div
                className={`h-screen w-screen flex items-start justify-start bg-gradient-to-r from-purple-300 to-red-300`}
              ></div>
              {developmentItems.map((item) => (
                <div
                  className={`min-h-screen  w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `}
                  style={{ x: sectionOneX }}
                  key={item.id}
                >
                  <div className="flex flex-col gap-8 text-white drop-shadow-2xl">
                    {/* title */}{' '}
                    <span className="text-sm md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit mb-[-2rem]">
                      Development
                    </span>
                    <h1 className="text-xl  md:text-4xl lg:text-6xl xl:text-7xl font-bold ">
                      {item.title}
                    </h1>
                    <div className="relateive">
                      <div className="flex flex-col xl:flex-row xl:gap-20">
                        <div>
                          {/* image */}
                          <div className="relative w-80 h-56 rounded-2xl overflow-clip drop-shadow-lg  md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                            <Image src={item.img} alt="" fill />
                          </div>
                          {/* hashtag */}
                          <p className="font-bold mt-3 text-sm md:text-xl text-red-500">
                            {item.hashtag && item.hashtag}
                          </p>{' '}
                          {/* link */}
                          <div className="flex items-center justify-start gap-4 text-white mt-2 md:mt-6 ">
                            {item.link &&
                              Array.isArray(item.link) &&
                              item.link.map((link) => (
                                <Link
                                  href={link.url}
                                  key={link.url}
                                  className="flex justify-end items-center"
                                >
                                  {renderIconByLink(link.site)}
                                </Link>
                              ))}
                          </div>{' '}
                        </div>
                        <div className="flex flex-col items-start">
                          {/* description */}{' '}
                          <div className="flex gap-4 flex-wrap cursor-pointer mt-4 md:mt-10 w-[80vw] md:w-96 lg:w-[500px] lg:text-xl  xl:w-[600px]">
                            {item.skills.map((skill, index) => (
                              <div
                                key={index}
                                className="rounded p-2 text-xs md:text-sm  bg-black text-[#cace64] hover:bg-white hover:text-black font-semibold"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          <p className="w-80 md:w-96 lg:w-[500px]  lg:text-xl  xl:w-[600px] mt-8 text-slate-800 text-xs md:text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>{' '}
        </div>{' '}
        {/* design */}
        <div className="h-[600vh] relative" ref={sectionTwoRef} id="des">
          <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-2 items-center justify-center text-8xl text-center">
            <div className="flex flex-col ">
              <Link
                href="/portfolio/#dev"
                onClick={(e) => smoothScroll(e, 'dev')}
              >
                <h1 className="hover:opacity-100 font-bold text-2xl md:text-3xl 2xl:text-5xl text-shadow  opacity-50 mb-5">
                  Development
                </h1>
              </Link>
              <span className="text-[.8rem] md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit ">
                My works
              </span>
              <h1 className="font-bold text-4xl md:text-7xl 2xl:text-9xl text-shadow mb-10 md:mb-20">
                Design
              </h1>
              <Link
                href="/portfolio/#media"
                onClick={(e) => smoothScroll(e, 'media')}
              >
                <h1 className="hover:opacity-100 font-bold text-2xl md:text-3xl 2xl:text-5xl text-shadow mb-10 opacity-50">
                  Media Production
                </h1>
              </Link>
            </div>

            <DownArrow />
          </div>
          {/* design mapping */}
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div className="flex" style={{ x: sectionTwoX }}>
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
              ></div>
              {designItems.map((item) => (
                <div
                  className={`h-screen w-screen flex  bg-gradient-to-r ${item.color} items-center justify-center `}
                  style={{ x: sectionOneX }}
                  key={item.id}
                >
                  <div className="flex flex-col gap-8 text-white drop-shadow-2xl ">
                    {/* title */}
                    <span className="text-sm md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit mb-[-2rem] ">
                      Design
                    </span>
                    <h1 className=" text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl w-[80vw]">
                      {item.title}
                    </h1>

                    <div className="relateive">
                      <div className="flex flex-col xl:flex-row xl:gap-20">
                        <div>
                          {/* image */}
                          <div className="relative w-80 h-56  md:w-96 rounded-2xl overflow-clip drop-shadow-lg md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                            <Image src={item.img} alt="" fill />
                          </div>
                          {/* hashtag */}
                          <p className="font-bold mt-3 text-xl text-red-500">
                            {item.hashtag && item.hashtag}
                          </p>{' '}
                          {/* link */}
                          <div className="flex items-center justify-start gap-4 text-white mt-6 ">
                            {item.link &&
                              Array.isArray(item.link) &&
                              item.link.map((link) => (
                                <Link
                                  href={link.url}
                                  key={link.url}
                                  className="flex justify-end items-center"
                                >
                                  {renderIconByLink(link.site)}
                                </Link>
                              ))}
                          </div>{' '}
                        </div>
                        <div className="flex flex-col items-start">
                          {/* description */}{' '}
                          <div className="flex gap-4 flex-wrap cursor-pointer mt-6 md:mt-10 w-80 md:w-96 lg:w-[500px] lg:text-xl text-sm xl:w-[600px]">
                            {item.skills.map((skill, index) => (
                              <div
                                key={index}
                                className="rounded p-2 text-xs md:text-sm  bg-black text-[#cace64] hover:bg-white hover:text-black font-semibold"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          <p className="w-80 md:w-96 lg:w-[500px] lg:text-xl text-xs  xl:w-[600px] mt-8 text-slate-800">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>{' '}
        </div>
        {/* media */}
        <div className="h-[600vh] relative" ref={sectionThreeRef} id="media">
          <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-2 items-center justify-center text-8xl text-center">
            <div className="flex flex-col ">
              <Link
                href="/portfolio/#des"
                onClick={(e) => smoothScroll(e, 'des')}
              >
                <h1 className="hover:opacity-100 font-bold text-2xl md:text-3xl 2xl:text-5xl text-shadow  opacity-50 mb-3 md:mb-5">
                  Design
                </h1>
              </Link>
              <span className="text-[.8rem] md:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit ">
                My works
              </span>
              <h1 className="font-bold text-4xl md:text-7xl 2xl:text-9xl text-shadow mb-10 md:mb-20">
                Media Production
              </h1>
              <Link
                href="/portfolio/#dev"
                onClick={(e) => smoothScroll(e, 'dev')}
              >
                <h1 className="hover:opacity-100 font-bold text-2xl md:text-3xl 2xl:text-5xl text-shadow mb-10 opacity-50">
                  Development
                </h1>
              </Link>
            </div>

            <DownArrow />
          </div>
          {/* media mapping */}
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden ">
            <motion.div className="flex" style={{ x: sectionThreeX }}>
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
              ></div>

              {mediaItems.map((item) => (
                <div
                  className={`h-screen w-screen flex items-center justify-center  bg-gradient-to-r ${item.color}`}
                  style={{ x: sectionOneX }}
                  key={item.id}
                >
                  <div className="flex flex-col gap-8 text-white drop-shadow-2xl ">
                    {/* title */}{' '}
                    <span className="text-[.8rem] md:text-sm lg:text-lg bg-black rounded-t-lg rounded-r-lg p-2 font-semibold flex items-center text-[#cace64] w-fit mb-[-2rem]">
                      Media Production
                    </span>
                    <h1 className="text-xl w-[80vw] font-bold md:text-4xl lg:text-6xl xl:text-7xl ">
                      {item.title}
                    </h1>
                    <div className="relateive">
                      <div className="flex flex-col xl:flex-row xl:gap-20">
                        <div>
                          {/* video */}
                          <div className="relative rounded-2xl overflow-clip drop-shadow-lg">
                            <iframe
                              className="w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]"
                              src={item.link}
                            ></iframe>
                          </div>
                        </div>
                        <div className="flex flex-col items-start">
                          {/* description */}{' '}
                          <div className="flex gap-4 flex-wrap cursor-pointer mt-10 w-80 md:w-96 lg:w-[500px] lg:text-xl  xl:w-[600px]">
                            {item.skills.map((skill, index) => (
                              <div
                                key={index}
                                className="rounded p-2 text-xs md:text-sm  bg-black text-[#cace64] hover:bg-white hover:text-black font-semibold"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          <p className="w-80 md:w-96 lg:w-[500px] lg:text-xl  xl:w-[600px] mt-8 text-slate-800 text-xs">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>{' '}
        </div>
        {/* last screen */}
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-4xl mx-10 md:text-7xl font-bold ">
            Let&apos;s talk about your project!
          </h1>
          <div className="relative">
            <div className="">
              <Circle />
            </div>
            <button></button>
            <Link
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-[#cace64] rounded-full font-bold flex items-center justify-center z-30"
              href="/contact"
            >
              <button>Email me</button>
            </Link>
          </div>
        </div>
        <BackToTopButton bgcolor="#6b6b6b" />{' '}
      </motion.div>
      <motion.div
        className="h-full  block "
        initial={{ y: '-200vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MobilePortfolio />
      </motion.div>
    </>
  )
}

export default Portfolio
