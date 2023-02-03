import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUserFriends, FaListUl, FaSignInAlt } from "react-icons/fa";

const StudentControlSection = () => {
    return (
        <div className='flex'>
            <div className='w-1/5 border mr-5 py-6'>
                <Link  to={'/studentNavigation/addStudent'} className='flex items-center hover:bg-red-600 w-full px-4 py-2'><FaUserFriends/> <span className='ml-3'>Add Students</span></Link>
                <Link  to={'/studentNavigation/manageStudent'} className='flex items-center hover:bg-red-600 w-full px-4 py-2'><FaListUl/> <span className='ml-3'>Manage Students</span></Link>
                <button className='flex items-center hover:bg-red-600 w-full px-4 py-2 text-left'><FaSignInAlt className='mr-3'/> Logout</button>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default StudentControlSection;