import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="text-white bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full h-64 object-cover object-center rounded" src="/Sectionh.jpeg" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-white-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">WHO WE ARE?</h1>
              <p className="leading-relaxed">Sai Industries, is a modern manufacturing an ISO 9001-2015 certified company with wide range of Industrial, Agricultural, Infrastructural, Automobile, Power generation & Compressor components. Which includes all kind of valves such as Ball valve, Butterfly valve & Globe valves, Agricultural equipments, Construction equipments, Hydraulic & Pneumatic fitments, etc .</p>
            </div>
          </div>
        </div>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
      </section>

      <Services />

    </div>
  )
}
