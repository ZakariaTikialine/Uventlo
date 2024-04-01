import React, { useState } from 'react';
import { SlEmotsmile } from 'react-icons/sl';

interface UserMessagesInputProps {
    content: string;
    onContentChange: (content: string) => void;
    onSendMessage: (message: string) => void; // New prop to handle sending messages
}

const UserMessagesInput: React.FC<UserMessagesInputProps> = ({
    content,
    onContentChange,
    onSendMessage,
}) => {
    const [messagesList, setMessagesList] = useState<string[]>([]);

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleEmojiButtonClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleSendClick = () => {
        if (content.trim() !== '') {
          onSendMessage(content); // Pass the message content to the parent
          onContentChange(''); // Clear the input field
        }
    };
    
    return (
        <div className="flex items-center pt-3">
            <button className="bg-[#F6F8FC] mx-3" onClick={handleEmojiButtonClick} title="Select Emoji">
                <SlEmotsmile />
            </button>
            {showEmojiPicker && (
            <div className="emoji-picker">
              {/* Emoji picker content goes here */}
            </div>
        )}
        <input
            type="text"
            value={content}
            onChange={event => onContentChange(event.target.value)}
            placeholder="Type your message..."
            className="bg-[#F6F8FC] w-full p-2"
        />
        <button className="bg-[#724FFF] text-white rounded-md p-2 flex items-center ml-4 mr-3" onClick={handleSendClick}>
            Send
        </button>
        </div>
    );
    };
    
    export default UserMessagesInput;