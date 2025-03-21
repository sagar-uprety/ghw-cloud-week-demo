# MERN Stack Sample App - Deploy to Azure 

This project is a MERN (MongoDB, Express.js, React, and Node.js) Application. It's a simple employee management app that let's you add and edit records of your employee. 

The main purpose of this repo is to serve as an example of how one can deploy a modern web application using Azure Cloud Services 

## Technology Stack 

- **MongoDB**: A NoSQL database for storing application data.
- **Express.js**: A web application framework for Node.js.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime for server-side programming.
- **MongoDB**: NoSQL Database deployed on MongoDB Atlas


## Prerequisites for Local Deployment

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Create MongoDB Atlas Database from [mongodb.com](https://www.mongodb.com/products/platform/atlas-database).
- **Docker** (optional): Install Docker from [docker.com](https://www.docker.com/).

## Installation

1. Install server dependencies:
    ```sh
    cd app/server
    npm install
    ```

2. Setup config.env in app/server direcotry
   ``` 
    ATLAS_URI=<your-mongodb-ATLAS-connection-string>
    PORT=5050
    ```

3. Install client dependencies:
    ```sh
    cd app/client
    npm install
    ```

4. Setup .env file in app/client directory
    ```
    VITE_API_URL=http://localhost:5050
    ```


## Running the Application (Locally)

1. Run the server (from app/server):
    ```sh
    npm run dev

    # or (Nodemon required)
    nodemon server.js

    # or
    npm start

    # Your backend should be running at localhost:5050
    ```

2. Run the client (from app/client):
    ```sh
    # Vite is used during development environment
    npm run dev 
    ```

3. Access the client application: Open your browser and navigate to http://localhost:5173.

## Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
