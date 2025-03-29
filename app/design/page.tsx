'use client'
import { useEffect, useState } from 'react'
import Clock from '../components/Clock'
import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function CustomLayout() {
  const [width, setWidth] = useState(90)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500 // Adjust this value to control how much scroll is needed for full expansion
      const newWidth = Math.min(90 + (scrollPosition / maxScroll) * 10, 100) // Expand from 90 to 100
      setWidth(newWidth)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <html lang="en" className="bg-[#f5f5f5]">
      <body className="min-h-screen bg-[#f5f5f5]">
        <header className="flex flex-col items-center pt-10">
            <p className="absolute left-4 text-left text-l font-medium text-[#676767] font-[Helvetica_Neue,_Helvetica,_Arial,_sans-serif] tracking-[-.04em] leading-[.876]">NICOSQUIROZ</p>
          <p className="text-l font-medium text-[#676767] mb-1 font-[Helvetica_Neue,_Helvetica,_Arial,_sans-serif] tracking-[-.04em] leading-[.876]">
            VIÑA DEL MAR 
            <span className="font-light"> CL</span>
          </p>
          <Clock />
        </header>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0 bg-[#f5f5f5]">
          {/* Hero/Header Section */}
          <section className="h-[90vh] flex flex-col justify-center items-center">
            <h1 className="text-9xl font-bold text-center text-[#292929] mt-8">
              TECH <span className="text-[#FF5C00]">IS</span> ART
            </h1>
            <p className="mt-4 text-xl text-center text-gray-600">
              Your idea, beautifully explained.
            </p> 
            <p className="mt-4 text-xl text-center text-gray-600 hover:text-[#FF5C00] cursor-pointer group flex items-center gap-2">
              GET A SITE DESIGN <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </p> 
          </section>
          <div className="flex justify-center items-center min-h-screen">
            <div 
              className="transition-all duration-300 ease-out"
              style={{ 
                width: `${width}vw`,
              }}
            >
              <img 
                src="/images/techisart/clouds.png" 
                alt="Clouds"
                className="w-full h-auto rounded-t-3xl"
              />
            </div>
          </div>
        <h1 className="text-7xl font-bold text-center text-[#2298BD] mt-8 font-[Helvetica_Neue] tracking-[-.04em] leading-[.876]">
            LANDING
        </h1>
        <div className="w-full flex justify-center">
          <img
            src="/images/techisart/cinta.svg"
            alt="Circular iterative pattern"
            className="rotating-image"
            style={{ 
              width: '100vw',
              maxWidth: '1100px',
              height: 'auto',
              objectFit: 'contain',
              marginTop: '-80vh',
              filter: 'drop-shadow(50px 50px 10px rgba(101, 101, 101, 0.25))'
            }}
          />
        </div>

          

          {/* Content Sections */}
          <section className="py-12 px-8 md:px-16 lg:px-18 max-w-7xl mx-auto -mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className={`text-7xl font-[500] text-[#292929] tracking-[-.04em] leading-[.876] ${ibmPlexSans.className}`}>
                  Beautifully explained,    
                      right to the escence.
                </h2>
                <p className="mt-4 text-4xl font-[400] text-[#292929] tracking-[-.03em] leading-[.876] font-[Helvetica_Neue]">
                And for the nature of what you build,and the people you present this to,sometimes it gets very hard to explainin simple words,what’s complex to all.Let’s show them.You are the inventor.                </p>
              </div>
              <div>
              </div>
            </div>
          </section>

          {/* Additional sections as needed */}
        </div>
      </body>
    </html>
  )
}