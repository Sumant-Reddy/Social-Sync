# Social Sync

A full-stack social media platform with real-time features including chat, video calls, and file sharing.

## Features

- User Authentication (JWT)
- Post Management
- Real-time Chat
- Video & Audio Calls
- File Sharing
- Media Upload (Cloudinary)
- Redis Caching
- Responsive UI
- Real-time Notifications

## Tech Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI for components
- Socket.io-client for real-time features
- Simple-peer for WebRTC video calls

### Backend
- Node.js & Express.js with TypeScript
- MongoDB with Mongoose
- Socket.io for real-time communication
- Redis for caching
- JWT for authentication
- Cloudinary for media storage

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Redis
- Cloudinary account

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/social-sync.git
cd social-sync
```

2. Install dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

3. Environment Setup
```bash
# Frontend
cp .env.example .env

# Backend
cd backend
cp .env.example .env
```

4. Configure environment variables in both `.env` files with your credentials

5. Start the development servers
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from root directory)
npm start
```

## API Documentation

The API documentation is available at `/api-docs` when running the backend server.

## Deployment

### Frontend
- Deploy to Vercel
- Configure environment variables in Vercel dashboard

### Backend
- Deploy to Render
- Set up MongoDB Atlas for database
- Configure Redis Cloud
- Set environment variables in Render dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 