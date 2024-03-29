import Image from 'next/image';
import React from 'react';
import UventloAvatar from '/public/assets/images/UventloAvatar.svg';

interface Discussion {
    id: number;
    content: string;
    sender: string;
}

interface EventQuestionsProps {
    discussion: Discussion[];
}


const eventQuestions: React.FC<EventQuestionsProps> = ({ discussion}) => {
    return (
            <div className="overflow-y:hidden flex flex-col p-3">
                {discussion && discussion.map((discussion) => (
                    <div className={`flex flex-row ${discussion.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <Image width={22} height={22} src={UventloAvatar} alt="Profile Picture" className={`${discussion.sender === 'user' ? 'hidden' : 'w-8 h-8 rounded-full mr-2'}`}/>
                        <div className='flex flex-col'>
                            <div
                                key={discussion.id}
                                className={`w-min text-nowrap rounded-lg my-2 p-2 ${discussion.sender === 'user' ? 'bg-[#724FFF] rounded-tr-none text-white' : 'bg-[#E9E9FF] rounded-tl-none text-[#515151]'}`}
                            >
                                <div className={`flex flex-row gap-2 items-center ${discussion.sender === 'user' ? 'hidden' : 'display'}`}><span className='text-black font-bold'>Uventlo</span><span className='text-gray-400 text-xs'>AI-BOT</span></div>
                                {discussion.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default eventQuestions;