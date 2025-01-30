import React from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, Image, Smile, Video } from 'lucide-react';

const Feed = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
      },
      content: 'Just had an amazing weekend! 🌟',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop',
      likes: 243,
      comments: 56,
      shares: 12,
      time: '2h'
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
      },
      content: 'New recipe I tried today! 🍝',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=800&fit=crop',
      likes: 456,
      comments: 89,
      shares: 23,
      time: '5h'
    }
  ];

  return (
    <div className="w-full lg:w-1/2 mx-auto pt-16 px-4">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-gray-100 rounded-full px-4 py-2 flex-grow focus:outline-none"
          />
        </div>
        <div className="flex justify-between mt-4 pt-4 border-t">
          <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <Video className="h-6 w-6 text-red-500" />
            <span>Live Video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <Image className="h-6 w-6 text-green-500" />
            <span>Photo/Video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <Smile className="h-6 w-6 text-yellow-500" />
            <span>Feeling/Activity</span>
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow mb-4">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img src={post.user.avatar} alt={post.user.name} className="h-10 w-10 rounded-full" />
                <div>
                  <h3 className="font-semibold">{post.user.name}</h3>
                  <p className="text-gray-500 text-sm">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-4">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="mt-4 rounded-lg w-full" />
            )}
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <ThumbsUp className="h-5 w-5 text-blue-500" />
                <span>{post.likes}</span>
              </div>
              <div className="flex space-x-4 text-gray-500">
                <span>{post.comments} comments</span>
                <span>{post.shares} shares</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4 py-2 border-t">
            <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
              <ThumbsUp className="h-5 w-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
              <MessageCircle className="h-5 w-5" />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;