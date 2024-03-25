"use client";
import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDown , FaArrowCircleRight} from 'react-icons/fa';
import { useState } from 'react';

const links = [
  { link: '/about-us', label: 'About Us' },
  { link: '/pricing', label: 'Pricing' },
];



export default function NavBar() {

  const [isOpenSolutions, setIsOpenSolutions] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const handleClickSolutions = () => {
    setIsOpenSolutions(!isOpenSolutions);
  };
  
  const handleClickServices = () => {
    setIsOpenServices(!isOpenServices);
  };
  

  return (
    <header className="bg-white border-b-2 border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link href={'/'} className="flex items-center">
          <Image src="/assets/icons/Logo.svg" alt='Logo' className='top-23 left-42' width={30} height={30}/>
          <h2 className='text-3xl font-bold ml-2' style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '44.22px', textAlign: 'left', color: '#724FFF' }}>Uventlo</h2>
        </Link>
        <nav>
          <ul className="flex list-none space-x-20">
            <li className="inline-block">
              <button type="button" className="bg-transparent border-none px-4 py-2 cursor-pointer text-black flex items-center gap-2 font-bold" onClick={handleClickSolutions}>
                <p>Solutions</p> <FaAngleDown />
              </button>
              <div className={`absolute z-30 border-none rounded-lg bg-white border shadow-md px-4 py-2 transition duration-200 ease-in-out ${isOpenSolutions ? 'visible' : 'hidden'}`} style={{left: '27%'}}>
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link href="/in-person-event" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>In - Person Event</p></Link>
                  </li>
                  <li>
                    <Link href="/virtual-events" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Virtual Events</p></Link>
                  </li>
                  <li>
                    <Link href="/hybrid" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Hybrid</p></Link>
                  </li>
                  <li>
                    <Link href="/webinars" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Webinars<span className='bg-main-purple text-white ml-2 px-2 rounded-lg text-sm'>soon</span></p></Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="inline-block">
              <button type="button" className="bg-transparent border-none px-4 py-2 cursor-pointer text-black flex items-center gap-2 font-bold" onClick={handleClickServices}>
                Services <FaAngleDown />
              </button>
              <div className={`absolute z-30 border-none rounded-lg bg-white border shadow-md px-4 py-2 transition duration-200 ease-in-out ${isOpenServices ? 'visible' : 'hidden'}`} style={{left: '39.5%'}}>
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link href="/ticketation" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Ticketation</p></Link>
                  </li>
                  <li>
                    <Link href="/web-site-builder" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Web-site builder</p></Link>
                  </li>
                  <li>
                    <Link href="/event-check-in" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Event check-in</p></Link>
                  </li>
                  <li>
                    <Link href="/agenda-builder" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Agenda builder</p></Link>
                  </li>
                  <li>
                    <Link href="/analytics-and-reporting" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Analytics & Reporting</p></Link>
                  </li>
                  <li>
                    <Link href="/ai-integration" className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>AI integration</p></Link>
                  </li>
                </ul>
              </div>
            </li>
            {links.map((link) => (
              <li className='inline-block px-4 py-2  font-bold' key={link.link}>
                <Link href={link.link} className="cursor-pointer text-black">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-2'>
          <Link href="/login" className="items-center px-4 py-2" style={{ width: '134px', height: '47px', borderRadius: '6px', border: '2px solid #724FFF', opacity: '0px', textAlign: 'center', }}>
            <span className='w-96 h-21 font-sans text-base font-medium leading-6 text-center' style={{color: '#724FFF'}}>Log in</span>
          </Link>
          <button className="text-white font-bold py-2 px-4 rounded" style={{ width: '134px', height: '47px', borderRadius: '6px', background: '#724FFF' }}>
            <span className='w-96 h-21 font-sans text-base font-medium leading-6 text-center'>Create Event</span>
          </button>
        </div>
      </div>
    </header>
  );
}