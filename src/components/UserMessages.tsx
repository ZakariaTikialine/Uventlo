import Image from 'next/image';
import React from 'react';

interface Message {
    id: number;
    content: string;
    sender: string;
    profilePicture: string;
    time: string;
}

interface UserMessagesProps {
    messages: Message[];
    myUser: string;
}


const UserMessages: React.FC<UserMessagesProps> = ({ messages, myUser }) => {
    return (
            <div className="overflow-y:hidden flex flex-col p-3">
                {messages && messages.map((message) => (
                    <div className={`flex flex-row ${message.sender === myUser ? 'justify-end' : 'justify-start'}`}>
                        <Image width={22} height={22} src={message.profilePicture} alt="Profile Picture" className={`${message.sender === myUser ? 'hidden' : 'w-8 h-8 rounded-full mr-2'}`}/>
                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center space-x-2'>
                                <div className={`${message.sender === myUser ? 'hidden' : 'text-sm font-medium'}`}>{message.sender}</div>
                                <div className={`${message.sender === myUser ? 'hidden' : 'text-xs text-gray-500'}`}>{message.time}</div>
                            </div>
                            <div
                                key={message.id}
                                className={`w-min text-nowrap rounded-lg my-2 p-2 ${message.sender === myUser ? 'bg-[#724FFF] rounded-tr-none text-white' : 'bg-[#FFF] rounded-tl-none text-[#515151]'}`}
                            >
                                {message.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default UserMessages;