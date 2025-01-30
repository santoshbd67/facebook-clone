import React from 'react';
import { ThumbsUp, MessageCircle, Share2, Bell, Search, Home, Users, Video, Menu, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
