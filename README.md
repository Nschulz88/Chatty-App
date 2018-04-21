# Chatty App

A client-side SPA (Single-Page Application) built with ReactJS, Webpack, Babel, Node.js and Web Sockets. 
This app communicates with a server via WebSockets to offer a multi-user, real-time chat experience. Currently there is no persistent Database attached to this project.

## Final Product 

!["Chat-Example-1"](https://github.com/Nschulz88/Chatty-App/blob/master/docs/Chatty%20App%20Screenshot_1.png){: .shadow}

!["Chat-Example-2 with name change"](https://github.com/Nschulz88/Chatty-App/blob/master/docs/Chatty%20App%20Screenshot_2.png){: .shadow}


## Dependencies

- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- react
- react-dom
- prop-types


### Usage

Clone this repo to your local machine. Follow these instructions to start both servers.

**You will need to have 2 terminals open: **

1. One to run the websocket server
Move into the 'chatty-app' folder and from there into the 'chatty-server' folder, from here --> install the dependencies and start the (websocket)server:
```
cd chatty-app
cd chatty-server
npm install
npm run start

```

2. One to run the app

In second terminal window, open 'chatty-app' folder, from here --> install the dependencies and start the (app) server.
```
cd chatty-app
npm install
npm run start
```
Now, open http://localhost:3000 in your browser and enjoy chit-chatting!!
