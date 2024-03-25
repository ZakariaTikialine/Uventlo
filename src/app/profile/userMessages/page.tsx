import Image from 'next/image'
import React from 'react'
import { FaSearch , FaThumbtack , FaComments} from 'react-icons/fa'

const page = () => {
    const users = [
        {
            profilePicture: "/assets/images/mini-profile.svg",
            role: "Co-Organizer",
            name: "John Doe",
            typing: false,
            lastMessage: "Hello!",
            lastMessageTime: "10:30 AM",
            notificationsExist: true,
            notifications: 3
        },
        {
            profilePicture: "/assets/images/mini-profile.svg",
            role: "Supplier",
            name: "Jane Smith",
            typing: true,
            lastMessage: "Typing...",
            lastMessageTime: "11:45 AM",
            notificationsExist: true,
            notifications: 9
        },
        {
            profilePicture: "/assets/images/mini-profile.svg",
            name: "Alice Johnson",
            typing: false,
            lastMessage: "How are you?",
            lastMessageTime: "12:00 PM",
            notificationsExist: false,
            notifications: 0
        }
    ];

    return (
        <div className='min-h-[calc(100dvh-80px)]'>
            <section className="bg-[#FBFBFF] min-h-[calc(100dvh-80px)] w-[350px]">
                <div className="flex justify-center gap-4 items-center h-[80px] py-4">
                    <div className='flex'>
                        <button className="mr-0 bg-white px-2 text-gray-300 h-[38px] rounded-l-lg border border-gray-300">
                            {<FaSearch />}
                        </button>
                        <input type="text" placeholder="Search" className='h-[38px] px-2 rounded-r-lg border border-gray-300' />
                    </div>
                    <button className="bg-[#724FFF] text-white rounded-[50%] w-[38px] h-[38px]">+</button>
                </div>

                <div className="pt-2">
                    <div className='flex justify-start items-center gap-3 text-[#818181] ml-8'>
                        <FaThumbtack className='text-md'/>
                        <span className='text-sm'>PINNED CHATS</span>
                    </div>
                    {users.filter(user => user.role).map((user, index) => (
                        <div key={index} className='flex py-3 pl-2 relative cursor-pointer'>
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
                        <div key={index} className='flex py-3 pl-2 relative cursor-pointer'>
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
        </div>
    );
}

export default page