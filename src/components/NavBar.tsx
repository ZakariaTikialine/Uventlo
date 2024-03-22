"use client";
import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';

const links = [
  { link: '/about-us', label: 'About Us' },
  { link: '/pricing', label: 'Pricing' },
];



export default function NavBar() {
  
const [isOpen, setIsOpen] = useState(false);
const handleClick = () => {
  setIsOpen(!isOpen);
};
  return (
    <header className="bg-white border-b-2 border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center">
          <Image src="/assets/icons/Logo.png" alt='Logo' className='top-23 left-42' width={30} height={30}/>
          <h2 className='text-3xl font-bold ml-2' style={{ fontFamily: 'Apercu Movistar', fontWeight: 700, lineHeight: '44.22px', textAlign: 'left', color: '#724FFF' }}>Uventlo</h2>
        </div>
        <nav>
          <ul className="flex list-none space-x-20">
            <li className="inline-block font-bold">
              <button type="button" className="bg-transparent border-none px-4 py-2 cursor-pointer text-black flex items-center" onClick={handleClick}>
                Solutions <FaAngleDown />
              </button>
              <div className={`absolute top-full left-0 w-fit bg-white border shadow-md px-4 py-2 opacity-0 transition duration-200 ease-in-out ${isOpen ? '' : 'hidden'}`}>
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link href="/in-person-event">In - Person Event</Link>
                  </li>
                  <li>
                    <Link href="/virtual-events">Virtual Events</Link>
                  </li>
                  <li>
                    <Link href="/hybrid">Hybrid</Link>
                  </li>
                  <li>
                    <Link href="/webinars">Webinars</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="inline-block font-bold">
              <button type="button" className="bg-transparent border-none px-4 py-2 cursor-pointer text-black flex items-center">
                Services <FaAngleDown />
              </button>
              <div className={`absolute top-full left-0 w-fit bg-white border shadow-md px-4 py-2 opacity-0 transition duration-200 ease-in-out ${isOpen ? '' : 'hidden'}`}>
              <ul className="list-none p-0 m-0">
                  <li>
                    <Link href="/ticketation">Tiketation</Link>
                  </li>
                  <li>
                    <Link href="/website-builder">Website Builder</Link>
                  </li>
                  <li>
                    <Link href="/event-check-in">Event check-in</Link>
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
          <Link href="/login" className="text-black hover:text-gray-300 items-center px-4 py-2" style={{ width: '134px', height: '47px', borderRadius: '6px', border: '2px solid #724FFF', opacity: '0px', textAlign: 'center', }}>
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