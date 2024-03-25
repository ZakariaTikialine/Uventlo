"use client"
import { navLinks } from "../../constants/navLinksUser"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"



const Sidebar = () => {
    const pathname = usePathname()

    return (
    <aside className='hidden h-[calc(100dvh-80px)] w-[223px] bg-white p-5 shadow-md shadow-purple-200/50 lg:flex'>
        <div className="flex size-full flex-col gap-4">
            <nav className="h-full flex-col justify-between md:flex md:gap-4">
                    <ul className="hidden w-full flex-col items-start gap-2 md:flex">
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname 
                            return (
                                <li key={link.route} className={`flex-center font-bold w-full whitespace-nowrap rounded-md bg-cover  transition-all hover:bg-main-purple hover:shadow-inner hover:text-white group ${ isActive ? 'bg-main-purple text-white' : 'text-black' }`}>
                                    <Link className="flex size-full items-center gap-4 p-4" href={link.route}>
                                        {link.icon}
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
            </nav>
        </div>
    </aside>
    )
}

export default Sidebar