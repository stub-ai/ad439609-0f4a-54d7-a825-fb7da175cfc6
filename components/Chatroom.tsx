import React from 'react';

const Chatroom = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Chatroom</h2>
        <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded">New Message</button>
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="flex flex-col flex-shrink-0 w-64 p-4 border-r border-gray-200">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">Contacts</h3>
          {/* Replace this with a map function to render contacts */}
          <div className="mb-2 text-sm text-gray-900">Contact Name</div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex-grow p-4 overflow-auto">
            {/* Replace this with a map function to render messages */}
            <div className="mb-4">
              <div className="mb-1 text-xs text-gray-500">Contact Name, 3:45 PM</div>
              <div className="p-2 bg-white rounded shadow">Hello, how are you?</div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <input className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Type a message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;