"use client";
import EventQuestions from '@/components/eventQuestions';
import EventQuestionsInput from '@/components/eventQuestionsInput';
import Image from 'next/image'
import React, { useState } from 'react';
import { FaRegTrashAlt , FaRegComment , FaRegShareSquare , FaPlus , FaRegPaperPlane , FaStar , FaCrosshairs , FaChartLine} from 'react-icons/fa'
import circle from '/public/assets/images/circle.svg'

const page = () => {
    const questions = [
        {
            question: "What is the event about?",
            discussion : [
                {content: "What is the event about?",
                sender: "user"},
                {content: "The event is about...",
                sender: 'Uventlo-Ai'}
            ]
            
        },
        {
            question: "What is the event about?",
            discussion : [
                {content: "What is the event about?",
                sender: "user"},
                {content: "The event is about...",
                sender: 'Uventlo-Ai'}
            ]
        },
        {
            question: "What is the event about?",
            discussion : [
                {content: "What is the event about?",
                sender: "user"},
                {content: "The event is about...",
                sender: 'Uventlo-Ai'}
            ]
        }
    ]

    const [selectedQuestion, setSelectedQuestion] = useState({});
    const [isSelected, setIsSelected] = useState(false); 
    const handleClick = () => {
        setIsSelected(true);
    }

    const handleClickSelected = ({question}:{question : {}}) => {
        setIsSelected(false);
        setSelectedQuestion(question);
    }

    return (
        <div className='min-h-[calc(100dvh-80px)] flex'>
            <section className="bg-[#E9E9FF] min-h-[calc(100dvh-80px)] w-[350px] flex flex-col justify-between">
                <div className='flex flex-col mt-3 mx-3'>
                    {questions.map((question, index) => (
                        <div key={index} onClick={handleClickSelected.bind(this, {question})}
                        className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2 p-2 my-2 font-semibold cursor-pointer'><FaRegComment/>{question.question}</div>
                        </div>
                    ))}
                    <div>
                        <div className={` flex flex-row gap-2 p-2 my-2 font-semibold cursor-pointer border-transparent rounded-lg ${isSelected ? 'bg-gradient-to-r from-[#AA95FF] to-[#DED5FF]' : 'hover:border-[#AA95FF] border-2'}`} onClick={handleClick}><FaPlus />Start new chat</div>
                    </div>
                </div>
                <div className='flex flex-col mb-3 ml-3'>
                    <div className='flex flex-row gap-2 p-2 my-2 font-semibold cursor-pointer'><FaRegTrashAlt />clear all conversations</div>
                    <div className='flex flex-row gap-2 p-2 my-2 font-semibold cursor-pointer'><FaRegShareSquare />Updates & FAQ</div>
                </div>
            </section>
            <section className='flex-1 bg-[#F4F4FD]'>
                    <div className={`${isSelected ? 'display' : 'hidden'}`}>
                        <p className='text-lg text-center mt-[120px]'>The power of AI at your service - Tame the knowledge !</p>
                        <h1 className='text-6xl text-center font-bold'>Welcome to Uventlo-Ai</h1>
                        <div className='flex flex-row items-center my-[60px] relative'>
                            <input
                                type="text"
                                placeholder="Example : Explain events management in simple terms..."
                                className=' w-full p-4 m-4 bg-[#E9E9FF] border border-[#AA95FF] rounded-md'
                            />
                            <FaRegPaperPlane className="bg-[#724FFF] text-white rounded-md p-2 flex items-center absolute right-[30px] w-10 h-10 cursor-pointer"/>
                        </div>
                        <div className='flex flex-row'>
                            <div className='flex flex-col items-center justify-center gap-2 p-4'>
                                <FaStar className='text-xl'/>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-xl text-center font-medium'>Clear and precise</h1>
                                    <p className='text-sm text-center font-light'>Uventlo-Ai is a powerful tool that helps you to understand and manage your events in a simple and efficient way.</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2 p-4'>
                                <FaCrosshairs className='text-xl'/>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-xl text-center font-medium'>Clear and precise</h1>
                                    <p className='text-sm text-center font-light'>Uventlo-Ai is a powerful tool that helps you to understand and manage your events in a simple and efficient way.</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2 p-4'>
                                <FaChartLine className='text-xl'/>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-xl text-center font-medium'>Increased efficiency</h1>
                                    <p className='text-sm text-center font-light'>Uventlo-Ai is a powerful tool that helps you to understand and manage your events in a simple and efficient way.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex left-1/3 -bottom-52 absolute'>
                            <Image src={circle} width={400} height={400} alt={''}/>
                        </div> */}
                    </div>
                    <div className={`${isSelected ? 'hidden' : 'display'}`}>
                        <div className='min-h-[calc(100dvh-202px)] bg-main-gray'>
                            <EventQuestions discussion={(selectedQuestion as {discussion: []}).discussion}/>
                        </div>
                        <div className="border-t border-gray-300"></div>
                        <div className='bg-[#F6F8FC] h-[60px]'>
                            <EventQuestionsInput />
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default page