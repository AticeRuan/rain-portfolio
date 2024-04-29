import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import TransitionProvider from '../components/transitionProvider'
import Raindrop from '@/components/raindrop'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '800'] })

export const metadata = {
  title: 'Rain Ruan | Designer and Developer',
  description:
    'A portfolio website for Rain Ruan, a designer and developer based in New Zealand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/favicon.ico"></link>
      </Head>
      <body className={montserrat.className}>
        {' '}
        <div>
          <div className="fixed radial-gradient-lime w-full h-full  -z-20"></div>
          <div className="fixed radial-gradient-blue w-full h-full  -z-20"></div>
          <TransitionProvider>
            {' '}
            {children}
            <Raindrop />
          </TransitionProvider>
        </div>
      </body>
    </html>
  )
}
