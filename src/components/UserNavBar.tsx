'use client';
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaExclamationCircle } from 'react-icons/fa';

export default function UserNavBar() {
    const [notifStatus, setNotifStatus] = useState(true);
    useEffect(() => {
        const updateStatus = async () => {
            try {
                const notif = await fetchNotifStatus();
                setNotifStatus(notif);
            } catch (error) {
                console.error('Error fetching online status:', error);
            }
        };

        if (!notifStatus) {
            updateStatus();
        }
    }, [notifStatus]);

    return (
        <header className="border-b-2 h-[80px] border-gray-200 flex items-center" style={{ backgroundColor: '#FEFBFB' }}>
            <div className="container mx-auto flex items-center justify-between py-3">
                <Link href={'/'}>
                    <div className="flex items-center">
                        <Image src="/assets/icons/Logo.svg" alt='Logo' className='top-23 left-42' width={30} height={30} />
                        <h2 className='text-3xl font-bold ml-2 text-[#724FFF]'>Uventlo</h2>
                    </div>
                </Link>
                <nav className='flex flex-row relative'>
                    <div className={`min-w-2 min-h-2 rounded-[50%] absolute top-[23px] left-[23px] ${notifStatus ? 'bg-[#c43131]' : 'bg-gray-500'}`} />
                    <ul className="flex list-none space-x-10">
                        <li className="inline-block">
                            <Link href="/notifications">
                                <div className={`w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center `}>
                                    <FaExclamationCircle className='w-6 h-6 text-gray-700' />
                                </div>
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link href="/profile/userProfile">
                                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                                    <Image src="/assets/images/mini-profile.svg" alt='Mini Circle' width={25} height={25} className='w-7 h-7' />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

async function fetchNotifStatus() {
    const response = await fetch('https://api.example.com/notif-status');
    const data = await response.json();
    return data.notif;
}