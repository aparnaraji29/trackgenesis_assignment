# **MEAN Stack Project - Local Installation and Setup Guide**
---
Welcome to the _MEAN_ (MongoDB, Express, Angular, Node.js) stack project! This guide will walk you through the steps to install and run the project locally on your machine.
## Prerequisites
---
- Node.js: **Download and install Node.js** (version 12 or above).
- MongoDB: **Download and install MongoDB** (Community Edition).
- Git: **Download and install Git**.
---
### **Installation**
- `Clone` the project repository from GitHub. Open your terminal or command prompt and run the following command:

```node
git clone <repository_url>
```
- `Navigate` into the project directory:
```node
cd <project_directory>
```
- Install the `project dependencies` by running the following command:
```node 
npm install
```
- Navigate to the client directory and `install the client-side dependencies`:
```node
cd frontend
npm install
```
---
## Running the Project with Nodemon and ng serve

To provide a better development experience, this MEAN stack project can be run using Nodemon for the server-side code and Angular's ng serve for the client-side code. Follow the steps below to run the project using both tools concurrently.
- Make sure your MongoDB server is running. Start MongoDB by executing the following command in a separate terminal or command prompt window:
```node
mongod
```
- To start the server, run the following command in the project's root directory:
```node
npm start
```
This command will start both the server and the Angular development server concurrently.
- Open your web browser and visit **http://localhost:4200** to access the project.
## Additional Notes
- The project's server code is located in the **backend** directory, and the client-side code (Angular) is located in the **frontend** directory.
---
`By running the project using Nodemon and ng serve concurrently, you can make changes to both the server-side and client-side code and see the updates immediately without manually restarting the server or refreshing the browser.`