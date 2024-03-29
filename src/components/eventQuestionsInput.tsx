import React, { useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';

const EventQuestionsInput: React.FC = () => {
    const [discussion, setDiscussion] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiscussion(event.target.value);
    };

    const handleSendClick = () => {
        // Add the message to the database and display it in user messages
    };

    return (
        <div className="flex items-center pt-3">
            <input
                type="text"
                value={discussion}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className='w-full p-4 m-4 bg-[#E9E9FF] border border-[#AA95FF] rounded-md'
            />
            <FaRegPaperPlane className="bg-[#724FFF] text-white rounded-md p-2 flex items-center absolute right-[30px] w-10 h-10 cursor-pointer" onClick={handleSendClick}/>
        </div>
    );
};

export default EventQuestionsInput;