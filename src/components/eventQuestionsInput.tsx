import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';

interface EventQuestionsInputProps {
    discussion: string;
    onDiscussionChange: (content: string) => void;
    onSendMessage: (message: string) => void; 
}

const EventQuestionsInput: React.FC<EventQuestionsInputProps> = ({
    discussion,
    onDiscussionChange,
    onSendMessage,
}) => {

    const handleSendClick = () => {
        if (discussion.trim() !== '') {
            onSendMessage(discussion);
            onDiscussionChange('');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendClick();
        }
    };

    return (
        <div className="flex items-center pt-3">
            <input
                type="text"
                value={discussion}
                onChange={event => onDiscussionChange(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className='w-full p-4 m-4 bg-[#E9E9FF] border border-[#AA95FF] rounded-md outline-none focus:outline-main-purple transition-all duration-200'
            />
            <FaRegPaperPlane className="bg-[#724FFF] text-white rounded-md p-2 flex items-center absolute right-[30px] w-10 h-10 cursor-pointer" onClick={handleSendClick}/>
        </div>
    );
};

export default EventQuestionsInput;