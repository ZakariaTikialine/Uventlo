import React, { useState } from 'react';
import { FaSearch , FaPlus} from 'react-icons/fa';

interface UserSearchProps {
    users: { name: string }[]; 
    onSearch: (filteredUsers: { name: string }[]) => void; 
}

    const UserSearch: React.FC<UserSearchProps> = ({ users, onSearch }) => {
    const [searchKey, setSearchKey] = useState('');

    const handleSearchChange = (e: { target: { value: string; }; }) => {
        setSearchKey(e.target.value.toLowerCase());
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchKey)
    );

    const handleSearch = () => {
        onSearch(filteredUsers); 
    };

    return (
        <div className="flex justify-center items-center h-[60px] py-4">
            <button className="mr-0 bg-white px-2 text-gray-300 h-[38px] rounded-l-lg border-y border-l border-gray-300" onClick={handleSearch}>
                <FaSearch />
            </button>
            <input
                type="text"
                placeholder="Search Users"
                className='h-[38px] px-2 rounded-r-lg border-y border-r border-gray-300'
                value={searchKey}
                onChange={handleSearchChange}
            />
            <FaPlus className="bg-[#724FFF] p-2 ml-4 cursor-pointer text-white rounded-[50%] w-[34px] h-[34px]"/>
        </div>
    );
    };

export default UserSearch;
