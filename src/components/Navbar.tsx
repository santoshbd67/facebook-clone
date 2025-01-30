import React from 'react';
import { Bell, Search, MessageCircle, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <h1 className="text-blue-600 text-3xl font-bold">facebook</h1>
            <div className="ml-4 relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Facebook"
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MessageCircle className="h-6 w-6 text-gray-600" />
            </button>
            <button className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;