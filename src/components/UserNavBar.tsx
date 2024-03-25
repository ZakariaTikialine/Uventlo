import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaExclamationCircle } from 'react-icons/fa';

export default function UserNavBar() {
    return (
        <header className="border-b-2 h-[80px] border-gray-200 flex items-center" style={{backgroundColor : '#FEFBFB'}}>
            <div className="container mx-auto flex items-center justify-between py-3">
                <Link href={'/'} className="flex items-center">
                    <Image src="/assets/icons/Logo.svg" alt='Logo' className='top-23 left-42' width={30} height={30}/>
                    <h2 className='text-3xl font-bold ml-2' style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '44.22px', textAlign: 'left', color: '#724FFF' }}>Uventlo</h2>
                </Link>
                <nav>
                    <ul className="flex list-none space-x-10">
                        <li className="inline-block">
                            <Link href="/notifications" className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                                <FaExclamationCircle className='w-7 h-7 text-gray-700'/>
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link href="/profile/userProfile" className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                                <Image src="/assets/images/mini-profile.svg" alt='Mini Circle' width={25} height={25} className='w-7 h-7'/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
    }