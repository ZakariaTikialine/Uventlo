"use client";
import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDown , FaArrowCircleRight} from 'react-icons/fa';
import { useState } from 'react';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const links = [
  { link: '/about-us', label: 'About Us' },
  { link: '/pricing', label: 'Pricing' },
];



export default function NavBar() {
  const { setTheme } = useTheme()

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
          <ul className="flex items-center list-none space-x-20">
            <li className="inline-block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none px-4 py-2 cursor-pointer text-black flex items-center gap-2 font-semibold text-lg">Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>In - Person Event</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Virtual Events</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Hybrid</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Webinars<span className='bg-main-purple text-white ml-2 px-2 rounded-lg text-sm'>soon</span></p></NavigationMenuLink>
                    </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li> 
            <li className="inline-block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none px-4 py-2 cursor-pointer text-black flex items-center gap-2 font-semibold text-lg">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      <NavigationMenuLink className='flex flex-row items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Ticketation</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex flex-row items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Web-site builder</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Event check-in</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Agenda builder</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>Analytics & Reporting</p></NavigationMenuLink>
                      <NavigationMenuLink className='flex items-center gap-2'><FaArrowCircleRight className='text-sm text-main-purple'/><p>AI integration</p></NavigationMenuLink>
                    </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            {links.map((link) => (
              <li className='inline-block px-4 py-2 font-semibold' key={link.link}>
                <Link href={link.link} className="cursor-pointer text-black text-lg">
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
          <Link href='/register' className="items-center text-white py-2 px-4" style={{ width: '134px', height: '47px', borderRadius: '6px', border: '2px solid #724FFF',background: '#724FFF' , textAlign: 'center'}}>
            <span className='w-96 h-21 font-sans text-base font-medium leading-6 text-center'>Register</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}