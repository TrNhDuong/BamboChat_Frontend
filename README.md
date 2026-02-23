# BamboChat - Frontend

BamboChat is a premium, real-time chat application designed for a seamless and modern communication experience. Built with a focus on speed, security, and aesthetics, it provides a high-performance interface for both individual and group conversations.

## 🌟 Key Features

- 🔐 **Advanced Authentication**: Secure login and registration with OTP verification and Google OAuth integration.
- 💬 **Real-time Messaging**: Instant, low-latency communication powered by WebSockets.
- 👥 **Group Management**: Easily create groups, add members, and manage collaborative chats.
- 👤 **Personalized Profiles**: Customizable user profiles with avatar support and status management.
- 🎨 **Premium UI/UX**: A custom-built design system featuring:
    - Sleek light and dark mode support.
    - Glassmorphism effects and smooth micro-animations.
    - Responsive layout for all devices.
- 🔍 **Smart Search**: Find messages and friends quickly with integrated search functionality.
- 🛡️ **Protected Routes**: Secure application state management and route protection.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Real-time**: [Socket.io-client](https://socket.io/)
- **API Client**: [Axios](https://axios-http.com/)
- **Styling**: Custom CSS Design System with CSS Variables

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd BamboChat-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the necessary configurations:
   ```env
   VITE_API_BASE_URL=your_api_url
   VITE_WSS_URL=your_socket_url
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production

Build the project for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

- `src/components`: Reusable UI components.
- `src/pages`: Main application views (Chat, Login, Register, etc.).
- `src/context`: React Context for state management.
- `src/services`: API and Socket service layers.
- `src/types`: TypeScript interfaces and type definitions.
- `src/index.css`: Core design system and global styles.

---

Made with ❤️ by the BamboChat Team.
