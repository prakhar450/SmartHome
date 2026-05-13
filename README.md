# Smart Home Console

A web-based IoT device management console where users can register, add smart home devices, control actions, and monitor their connected devices. Built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication (Passport.js)
- Add, view, and remove smart home devices
- Control device actions
- Structured logging with Pino and Log4js
- API tests with Jest and Supertest

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** Passport.js with local strategy
- **Views:** EJS templates with partials
- **Logging:** Pino, Log4js
- **Testing:** Jest, Supertest

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Setup

```bash
git clone https://github.com/prakhar450/SmartHome.git
cd SmartHome
npm install
```

Start MongoDB in a separate terminal:

```bash
mongod
```

Run the app:

```bash
node app.js
```

The console will be available at `http://localhost:3000`.

### Testing

```bash
npm run test
```

## Project Structure

```
app.js               # Express server + middleware config
models/
  user.js            # User model (passport-local-mongoose)
  device.js          # Device model (name, action, author)
routes/
  auth.js            # Registration and login routes
  device.js          # Device CRUD and actions
__test__/
  device.spec.js     # API tests
views/               # EJS templates
  partials/          # Shared components
screenshots/         # App screenshots
```

## Screenshots

![Device List](screenshots/Screenshot%202020-03-27%20at%205.57.15%20PM.png)
![Add Device](screenshots/Screenshot%202020-03-27%20at%205.57.33%20PM.png)
![Device Actions](screenshots/Screenshot%202020-03-27%20at%205.58.22%20PM.png)
