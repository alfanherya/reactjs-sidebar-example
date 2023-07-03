import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 px-4 py-8 flex flex-col">
        <div className="flex items-center mb-8">
          <span className="text-white text-2xl font-bold">My Sidebar</span>
        </div>
        <ul>
          <li className="mb-4">
            <a href="/" className="flex items-center text-white hover:text-gray-200">
              <span className="mr-3"><AiOutlineHome /></span>
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="/about" className="flex items-center text-white hover:text-gray-200">
              <span className="mr-3"><AiOutlineUser /></span>
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="/contact" className="flex items-center text-white hover:text-gray-200">
              <span className="mr-3"><AiOutlineMail /></span>
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;
