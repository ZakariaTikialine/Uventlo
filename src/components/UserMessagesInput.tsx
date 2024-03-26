import React, { useState } from 'react';
import { SlEmotsmile } from 'react-icons/sl';

const UserMessagesInput: React.FC = () => {
    const [message, setMessage] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendClick = () => {
        // Add the message to the database and display it in user messages
    };

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleEmojiButtonClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    return (
        <div className="flex items-center pt-3">
            <button className="bg-[#F6F8FC] mx-3" onClick={handleEmojiButtonClick} title="Select Emoji"><SlEmotsmile /></button>
            {showEmojiPicker && (
                <div className="emoji-picker">
                    {/* Emoji picker content goes here */}
                </div>
            )}
            <input
                type="text"
                value={message}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className='bg-[#F6F8FC] w-full p-2'
            />
            <button className="bg-[#724FFF] text-white rounded-md p-2 flex items-center ml-4 mr-3"  onClick={handleSendClick}>
                Send
            </button>
        </div>
    );
};

export default UserMessagesInput;