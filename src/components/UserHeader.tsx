"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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

    return (
        <>
        {userName && (
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
