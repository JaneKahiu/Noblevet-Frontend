import { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Search, 
  Plus, 
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  Check,
  CheckCheck,
  Clock
} from 'lucide-react';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Smith',
      role: 'Veterinarian',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      lastMessage: 'Fluffy\'s test results are looking great!',
      time: '2 min ago',
      unread: 2,
      online: true,
      messages: [
        {
          id: 1,
          sender: 'Dr. Smith',
          content: 'Hello! I have Fluffy\'s test results ready.',
          time: '10:30 AM',
          status: 'received'
        },
        {
          id: 2,
          sender: 'You',
          content: 'That\'s great! How does everything look?',
          time: '10:32 AM',
          status: 'sent'
        },
        {
          id: 3,
          sender: 'Dr. Smith',
          content: 'Fluffy\'s test results are looking great! All values are within normal range.',
          time: '10:35 AM',
          status: 'received'
        },
        {
          id: 4,
          sender: 'Dr. Smith',
          content: 'I\'ll send you a detailed report via email.',
          time: '10:35 AM',
          status: 'received'
        }
      ]
    },
    {
      id: 2,
      name: 'Dr. Johnson',
      role: 'Veterinary Surgeon',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      lastMessage: 'Max\'s appointment is confirmed for Friday',
      time: '1 hour ago',
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: 'You',
          content: 'Hi, I\'d like to book an appointment for Max',
          time: '9:00 AM',
          status: 'read'
        },
        {
          id: 2,
          sender: 'Dr. Johnson',
          content: 'Of course! What would you like to have done?',
          time: '9:15 AM',
          status: 'received'
        },
        {
          id: 3,
          sender: 'You',
          content: 'He needs his annual vaccinations',
          time: '9:16 AM',
          status: 'read'
        },
        {
          id: 4,
          sender: 'Dr. Johnson',
          content: 'Max\'s appointment is confirmed for Friday at 2:00 PM',
          time: '9:20 AM',
          status: 'received'
        }
      ]
    },
    {
      id: 3,
      name: 'Reception',
      role: 'Front Desk',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      lastMessage: 'Reminder: Bella\'s appointment tomorrow',
      time: '3 hours ago',
      unread: 1,
      online: true,
      messages: [
        {
          id: 1,
          sender: 'Reception',
          content: 'Reminder: Bella\'s appointment tomorrow at 11:00 AM',
          time: 'Yesterday',
          status: 'received'
        }
      ]
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      // Add message logic here
      setNewMessage('');
    }
  };

  const getMessageStatus = (status) => {
    switch (status) {
      case 'sent':
        return <Check className="h-4 w-4 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="h-4 w-4 text-gray-400" />;
      case 'read':
        return <CheckCheck className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Messages</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Plus className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedChat(conversation)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedChat?.id === conversation.id ? 'bg-emerald-50 border-emerald-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                    <span className="text-xs text-gray-500">{conversation.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{conversation.role}</p>
                  <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                </div>
                {conversation.unread > 0 && (
                  <div className="w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center">
                    {conversation.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
                  <p className="text-sm text-gray-600">
                    {selectedChat.role} • {selectedChat.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Video className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'You'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <div className={`flex items-center justify-end space-x-1 mt-1 ${
                      message.sender === 'You' ? 'text-emerald-200' : 'text-gray-500'
                    }`}>
                      <span className="text-xs">{message.time}</span>
                      {message.sender === 'You' && getMessageStatus(message.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip className="h-5 w-5 text-gray-600" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded">
                    <Smile className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          // No Chat Selected
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose from your existing conversations or start a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
