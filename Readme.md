
# Clack - Online Chat Application

## Overview

The Web Chat Application is a real-time messaging platform that enables users to communicate with each other in a chat-based interface. It provides a seamless chatting experience with various features such as sending text messages, group chats, and notifications.

## Features

- **User Authentication:** Users can sign up, log in, and authenticate themselves securely.
- **Real-time Messaging:** Instant messaging functionality for real-time communication.
- **Group Chats:** Create and participate in group chats with multiple users.
- **Notifications:** Receive notifications for new messages..
- **Search Users:** Search and find other users to start a chat.

## Technologies Used

- **Frontend:**
  - React.js
  - Bootstrap
  - Chakra UI for UI components
  - React Router for navigation
  - Socket.io for real-time communication

- **Backend:**
  - Node.js
  - Express.js for RESTful APIs
  - MongoDB for database
  - Mongoose for object modeling
  - bcrypt for encrypting passwords
  - jsonwebtoken for authentication

## Application Flow

1. **User Authentication:**
   - Users can sign up or log in using their credentials.

2. **Dashboard:**
   - Upon successful login, users are directed to the dashboard.

3. **Chat Interface:**
   - Users can view their chats, participate in group chats, and send messages.

4. **Search Users:**
   - Ability to search for other users to start new chats.

5. **Notifications:**
   - Receive notifications for new messages or chat updates.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Nike1090/Web-Design---final.git
```

Go to the project directory

```bash
  cd Web-Design---final
```

Install dependencies

```bash
  npm install
```

```bash
  cd frontend/
  npm install --legacy-peer-deps
```

Start the server

```bash
  npm run start
```
Start the Client

```bash
  //open now terminal
  cd frontend
  npm start
```

## Contributions
 - Aashay Pawar :  userAvatar, chatbox.js, mychats.js, chatLoading.js, middleware etc.,
 - Anusree Myneni : Pages like homepage and chat page, config, models etc.,
 - Mamatha shree : chatprovider.js, app.js, authentication, misc etc.,
 - Sri Krishna Karumanchi : singlechat.js,groupchatmodel.js, routes for users,chats,messages  etc.,
 - Nikhil kumar bavandla : db.js, token generation, controllers for users,chats,messages and server.js etc.,


### Authenticaton
![Login](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/login.png)
![Signup](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/signup.png)
### Real Time Chatting with Typing indicators
![realTimeChat](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/real%20time%20chat.png)
### One to One chat
![oneToOneChat](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/one%20to%20one%20chat.png)
### Search Users
![SearchUsersToChat](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/search%20users.png)
### Create Group Chats
![createGroupchat](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/group%20chat%20creation.png)
### Notifications 
![Notification](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/Message%20notification.png)
### Add or Remove users from group
![AddOrRemoveUsersFromGroup](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/group%20chat%20can%20be%20updated.png)
### View user Profile
![UserProfile](https://github.com/Nike1090/Web-Design---final/blob/main/screenshots/profile%20detail.png)

## Demo
[Clack-app](https://clack-app.onrender.com)
  
