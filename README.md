# ✨ Full Stack Realtime Chat App ✨

![Demo App](/client/public/ChatHome.png)


Highlights:

- 🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
- 🎃 Authentication && Authorization with JWT
- 👾 Real-time messaging with Socket.io
- 🚀 Online user status
- 👌 Global state management with Zustand
- 🐞 Error handling both on the server and on the client
- ⭐ Deployed on [Render](https://render.com)
- ⏳ And much more!

### Setup .env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm run dev
```

### Folder Structure

```
└── 📁Chat App
    └── 📁client
        └── 📁public
            ├── avatar.png
            ├── ChatHome.png
            ├── logo.svg
            ├── vite.svg
        └── 📁src
            └── 📁assets
                ├── react.svg
            └── 📁components
                └── 📁skeletons
                    ├── MessageSkeleton.jsx
                    ├── SidebarSkeleton.jsx
                ├── AuthImagePattern.jsx
                ├── ChatContainer.jsx
                ├── ChatHeader.jsx
                ├── MessageInput.jsx
                ├── Navbar.jsx
                ├── NoChatSelected.jsx
                ├── Slidebar.jsx
            └── 📁constants
                ├── index.js
            └── 📁lib
                ├── axios.js
                ├── utils.js
            └── 📁pages
                ├── HomePage.jsx
                ├── LoginPage.jsx
                ├── ProfilePage.jsx
                ├── SettingsPage.jsx
                ├── SignupPage.jsx
            └── 📁store
                ├── useAuthStore.js
                ├── useChatStore.js
                ├── useThemeStore.js
            ├── App.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        ├── vite.config.js
    └── 📁server
        └── 📁src
            └── 📁controllers
                ├── auth.controller.js
                ├── message.controller.js
            └── 📁lib
                ├── cloudinary.js
                ├── db.js
                ├── socket.js
                ├── utils.js
            └── 📁middleware
                ├── auth.middleware.js
            └── 📁models
                ├── message.model.js
                ├── user.model.js
            └── 📁routes
                ├── auth.route.js
                ├── message.route.js
            └── 📁seeds
                ├── user.seed.js
            ├── server.js
        ├── .env
        ├── package-lock.json
        ├── package.json
    ├── .gitignore
    ├── package.json
    └── README.md
```
