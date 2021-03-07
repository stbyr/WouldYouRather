# Would You Rather Project

The "Would You Rather?" app is a React/Redux front end application, where users can play the "Would You Rather?" game: A user is asked a question in the form "Would you rather [option A] or [option B] ?". Answering "neither" or "both" is against the rules. Users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard. Login is required before accessing the game. 

The `_DATA.js` file represents a fake database and methods that let you access the data, consisting in users and questions. 

## Installation and Launching the app

You must have npm (or yarn) installed on your computer.
Install all project dependencies:

```bash
npm install 
npm install --save react-redux redux redux-thunk react-router-dom react-redux-loading-bar prop-types
````

Start the development server:

```bash 
npm start
````

## Desktop View Recommendation

This app is not yet supporting a mobile view. Please use in a browser window of at least 1180px width. 

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

## License

The `_DATA.js` file was provided as starter code by Udacity's React Nanodegree. All other code for this application was written by Stefanie Beyer, Berlin 2021.