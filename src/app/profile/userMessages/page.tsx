"use client";
import UserHeader from '@/components/UserHeader';
import UserMessages from '@/components/UserMessages';
import UserMessagesInput from '@/components/UserMessagesInput';
import UserSearch from '@/components/UserSearch';

import Image from 'next/image'
import React, { useState } from 'react';
import {  FaThumbtack , FaComments} from 'react-icons/fa'

const page = () => {
    const users = [
        {
            profilePicture: "/assets/images/mini-profile.svg",
            role: "Co-Organizer",
            name: "John Doe",
            typing: false,
            lastMessage: 'Hello!',
            lastMessageTime: "10:30 AM",
            notificationsExist: true,
            notifications: 3 ,
            onlineStatus: true , 
            lastOnline: new Date() ,
            messages: [
                { content: 'Hello!', sender: 'John Doe' ,profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'},
                { content: 'How are you?', sender: 'John Doe',profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'},
                { content: `I'm good, thanks!`, sender: 'Alice Johnson',profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'}
            ]
        },
        {
            profilePicture: "/assets/images/mini-profile.svg",
            role: "Supplier",
            name: "Jane Smith",
            typing: true,
            lastMessage: 'Typing...',
            lastMessageTime: "11:45 AM",
            notificationsExist: true,
            notifications: 9 ,
            onlineStatus: true , 
            lastOnline: new Date(),
            messages: [
                { content: 'Hello!', sender: 'Jane Smith',profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'},
                { content: 'Typing...', sender: 'Jane Smith',profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'},
            ]
        },
        {
            profilePicture: "/assets/images/mini-profile.svg",
            name: "Alice Johnson",
            typing: false,
            lastMessage:'How are you?', 
            lastMessageTime: "12:00 PM",
            notificationsExist: false,
            notifications: 0 ,
            onlineStatus: false , 
            lastOnline: '2022-01-01',
            messages: [
                { content: 'How are you?', sender: 'Alice Johnson',profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'},
                { content: `I'm good,`, sender: 'John Doe',profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'},
                { content: `Thanks!`, sender: 'John Doe',profilePicture :"/assets/images/mini-profile.svg" , time: '10:30 AM'}
            ]
        }
    ];

    const [onSearch, setOnSearch] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [inputContent, setInputContent] = useState('');

    const handleSendMessage = (message: string) => {
        setSelectedUser({
        ...selectedUser,
        messages: [...(selectedUser as {messages: []}).messages, { content: message, sender: (selectedUser as { name: string }).name , profilePicture: "/assets/images/mini-profile.svg", time: new Date().toLocaleTimeString() }],
    });
        setInputContent('');
    };

    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleUserSearch = (searchTerm) => {
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
        setOnSearch(true);
        };

    return (
        <div className='min-h-[calc(100dvh-80px)] flex'>
            <section className="bg-[#FBFBFF] min-h-[calc(100dvh-80px)] w-[350px]">
                <UserSearch users={users} onSearch={handleUserSearch}/>
                <div className="border-t border-gray-300"></div>
                <div className="pt-2">
                    {onSearch && filteredUsers.length > 0 && filteredUsers !== users && filteredUsers.filter(user => user.role).map((user, index) => (
                        <div className="mt-4">
                            <h4 className="text-gray-600 font-medium mb-2">Search Results</h4>
                            <div key={index} className='flex py-3 pl-2 relative cursor-pointer' onClick={() => setSelectedUser(user)}>
                            <Image src={user.profilePicture} width={49} height={49} alt="Profile Picture"  className='ml-2 mr-4 rounded-full'/>
                            <div className='flex flex-col items-start'>
                                <span className='text-[#949494] text-sm'>
                                    <span className='font-extrabold pr-1'>.</span>{user.role}
                                </span>
                                <span className={user.typing ? 'text-[#717171] font-bold' : 'text-black font-bold'}>
                                    {user.name}
                                </span>
                                <span className={user.typing ? 'text-[#724FFF] text-sm font-medium' : 'text-sm font-medium'}>
                                    {user.typing ? 'Typing...' : user.lastMessage}
                                </span>
                            </div>
                            <div className='flex flex-col items-end absolute right-4'>
                                <span className='text-[#A0A0A0] text-sm'>
                                    {user.lastMessageTime}
                                </span>
                                <span className={user.notificationsExist ? 'bg-[#724FFF] rounded-full w-[20px] h-[20px] text-sm text-white text-center' : 'hidden'}>
                                    {user.notificationsExist ? user.notifications  > 9 ? '9+' : user.notifications : ''}
                                </span>
                            </div>
                        </div>
                        </div>
                    ))}
                    <div className='flex justify-start items-center gap-3 text-[#818181] ml-8'>
                        <FaThumbtack className='text-md'/>
                        <span className='text-sm'>PINNED CHATS</span>
                    </div>
                    {users.filter(user => user.role).map((user, index) => (
                        <div key={index} className='flex py-3 pl-2 relative cursor-pointer' onClick={() => setSelectedUser(user)}>
                            <Image src={user.profilePicture} width={49} height={49} alt="Profile Picture"  className='ml-2 mr-4 rounded-full'/>
                            <div className='flex flex-col items-start'>
                                <span className='text-[#949494] text-sm'>
                                    <span className='font-extrabold pr-1'>.</span>{user.role}
                                </span>
                                <span className={user.typing ? 'text-[#717171] font-bold' : 'text-black font-bold'}>
                                    {user.name}
                                </span>
                                <span className={user.typing ? 'text-[#724FFF] text-sm font-medium' : 'text-sm font-medium'}>
                                    {user.typing ? 'Typing...' : user.lastMessage}
                                </span>
                            </div>
                            <div className='flex flex-col items-end absolute right-4'>
                                <span className='text-[#A0A0A0] text-sm'>
                                    {user.lastMessageTime}
                                </span>
                                <span className={user.notificationsExist ? 'bg-[#724FFF] rounded-full w-[20px] h-[20px] text-sm text-white text-center' : 'hidden'}>
                                    {user.notificationsExist ? user.notifications  > 9 ? '9+' : user.notifications : ''}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="pt-4">
                    <div className='flex justify-start items-center gap-3 text-[#818181] ml-8 py-3'>
                        <FaComments className='text-md'/>
                        <span className='text-sm'>ALL MESSAGES</span>
                    </div>
                    {users.map((user, index) => (
                        <div key={index} className='flex py-3 pl-2 relative cursor-pointer' onClick={() => setSelectedUser(user)}>
                            <Image src={user.profilePicture} width={49} height={49} alt="Profile Picture"  className='ml-2 mr-4 rounded-full'/>
                            <div className='flex flex-col items-start'>
                                <span className={user.typing ? 'text-[#717171] font-bold' : 'text-black font-bold'}>
                                    {user.name}
                                </span>
                                <span className={user.typing ? 'text-[#724FFF] text-sm font-medium' : 'text-sm font-medium'}>
                                    {user.typing ? 'Typing...' : user.lastMessage}
                                </span>
                            </div>
                            <div className='flex flex-col items-end absolute right-4'>
                                <span className='text-[#A0A0A0] text-sm'>
                                    {user.lastMessageTime}
                                </span>
                                <span className={user.notificationsExist ? 'bg-[#724FFF] rounded-full w-[20px] h-[20px] text-sm text-white text-center' : 'hidden'}>
                                    {user.notificationsExist ? user.notifications  > 9 ? '9+' : user.notifications : ''}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='flex-1'>
                <div className='h-[60px] bg-[#FFFFFF]'>
                    <UserHeader 
                        userName={(selectedUser as { name: string }).name}
                        profilePictureUrl={(selectedUser as { profilePicture: string }).profilePicture}
                        onlineStatus={(selectedUser as {onlineStatus: boolean}).onlineStatus}
                        lastOnline={(selectedUser as {lastOnline: string | number | Date}).lastOnline}
                    />
                </div>
                <div className="border-t border-gray-300"></div>
                <div className='min-h-[calc(100dvh-202px)] bg-main-gray'>
                    <UserMessages messages={(selectedUser as {messages: []}).messages} myUser={(selectedUser as {name: string}).name} />
                </div>
                <div className="border-t border-gray-300"></div>
                

                <div className='bg-[#F6F8FC] h-[60px]'>
                <UserMessagesInput
                    content={inputContent}
                    onContentChange={setInputContent}
                    onSendMessage={handleSendMessage} />
                </div>
            </section>
        </div>
    );
}

export default page