import React from 'react';
import { Home, Users, Video, ShoppingBag, Calendar } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, text: 'Home' },
    { icon: Users, text: 'Friends' },
    { icon: Video, text: 'Watch' },
    { icon: ShoppingBag, text: 'Marketplace' },
    { icon: Calendar, text: 'Events' },
  ];

  return (
    <div className="w-1/4 fixed left-0 pt-16 h-screen overflow-y-auto hidden lg:block">
      <div className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center space-x-3 p-3 w-full hover:bg-gray-200 rounded-lg transition-colors"
          >
            <item.icon className="h-6 w-6 text-blue-500" />
            <span className="text-gray-700 font-medium">{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;