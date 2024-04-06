"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaEllipsisVertical , FaCircleUser , FaRegTrashCan , FaUsers , FaThumbtack , FaVolumeXmark} from 'react-icons/fa6';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const UserHeader = ({ userName, profilePictureUrl, onlineStatus, lastOnline }: { userName: string, profilePictureUrl: string, onlineStatus: boolean, lastOnline: string | number | Date }) => {
const [statusText, setStatusText] = useState(onlineStatus ? 'Online' : 'Offline');
useEffect(() => {
    const updateStatus = async () => {
    try {
        const isOnline = await fetchOnlineStatus(); 
        setStatusText(isOnline ? 'Online' : 'Offline');
    } catch (error) {
        console.error('Error fetching online status:', error);
    }
    };

    if (!onlineStatus) {
        updateStatus();
    }
    }, [onlineStatus]);

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        {userName && (
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row'>
                    <div className="h-[60px] bg-[#FFFFFF] flex items-center px-2 relative">
                        <Image
                            src={profilePictureUrl}
                            alt="User Profile Picture"
                            width={49}
                            height={49}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className={`w-3 h-3 rounded-[50%] ${onlineStatus ? 'bg-[#29D697]' : 'bg-gray-500'} absolute bottom-2 left-[36px]`} />
                    </div>      
                    <div className="flex flex-col items-start p-2">
                        <span className='text-[#515151] font-semibold'>{userName}</span>
                        {onlineStatus ? (
                            <span className="text-[#29D697]">Online</span>
                        ) : (
                            lastOnline && (
                                <span className="text-gray-500 font-medium">
                                    Last seen {calculateTimeSince(lastOnline)}
                                </span>
                            )
                        )}
                    </div>
                </div>
                <div className='p-5 text-[#515151] text-2xl cursor-pointer' onClick={handleClick}>
                    <FaEllipsisVertical />
                </div>
                <div className={`absolute z-30 border-none rounded-lg bg-white border shadow-md px-4 py-2 transition duration-200 ease-in-out right-[2.5%] top-[5%] ${isOpen ? 'visible' : 'hidden'}`} >
                    <ul className="list-none p-0 m-0 text-[#515151]">
                        <li>
                            <div className='flex flex-row items-center gap-2'><FaCircleUser/><p>Visite profile</p></div>
                        </li>
                        <li>
                            <AlertDialog>
                                <AlertDialogTrigger className='flex flex-row items-center gap-2'><FaThumbtack /><p>Pin chat</p></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle className='text-gray-500'>So you want to pin <span className='text-black'>@username</span> as :</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <Select>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Supplier" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Co-Organizer">Co-Organizer</SelectItem>
                                                <SelectItem value="Supplier">Supplier</SelectItem>
                                                <SelectItem value="Sponsor">Sponsor</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Decline</AlertDialogCancel>
                                        <AlertDialogAction>Yes</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </li>
                        <li>
                            <AlertDialog>
                                <AlertDialogTrigger className='flex flex-row items-center gap-2'><FaRegTrashCan/><p>Delete chat</p></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure that you want to delete this chat?</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Decline</AlertDialogCancel>
                                        <AlertDialogAction>Yes</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </li>
                        <li>
                            <div className='flex flex-row items-center gap-2'><FaVolumeXmark/><p>Mute chat</p></div>
                        </li>
                        <li>
                            <AlertDialog>
                                <AlertDialogTrigger className='flex flex-row items-center gap-2'><FaUsers /><p>Invite to collab</p></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Invite to collab to the :</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Event-name" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Event-name">Event-name</SelectItem>
                                                    <SelectItem value="Event-name2">Event-name</SelectItem>
                                                    <SelectItem value="Event-name3">Event-name</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Decline</AlertDialogCancel>
                                        <AlertDialogAction>Invite</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </li>
                    </ul>
                </div>
            </div>
        )}
        </>
    );
    };

export default UserHeader;

function calculateTimeSince(lastOnline: string | number | Date) {
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - new Date(lastOnline).getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
}

async function fetchOnlineStatus() {
    const response = await fetch('https://api.example.com/online-status');
    const data = await response.json();
    return data.isOnline;
}
