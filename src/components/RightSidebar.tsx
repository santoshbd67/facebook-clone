import React from 'react';
import { Video } from 'lucide-react';

const RightSidebar = () => {
  const contacts = [
    { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', online: true },
    { name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', online: true },
    { name: 'Emily Davis', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', online: false },
    { name: 'David Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', online: true },
  ];

  return (
    <div className="w-1/4 fixed right-0 pt-16 h-screen overflow-y-auto hidden lg:block">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-500 font-semibold">Contacts</h2>
          <Video className="h-5 w-5 text-gray-500" />
        </div>
        
        <div className="space-y-2">
          {contacts.map((contact, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 p-2 w-full hover:bg-gray-200 rounded-lg transition-colors"
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="h-8 w-8 rounded-full"
                />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <span className="text-gray-700">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;