# This repository contains "mini projects" built with React while following Edufect Institute Complete React JS Playlist

Follow the playlist here [React Tutorials - Complete React JS - From beginner to master ReactJS](https://github.com/facebook/create-react-app).

## Available Scripts

To Take a look at the individual programs run:

### `npm install`

To download the dependencies needed.

## Directory

### Components Folder 

- Components & JSX
- Event Handling & setState

- Directions: 
    - The Components folder contains 11 Exercises/Applications, those listed below the row of stars are applications
        - One (3 Strings)
        - Two (Numbers)
        - Three (Sorting Numbers)
        - Four (Students Array)
        - Five (Quiz Show Data)
        ********
        - Six (Button Counter)
        - Seven (Contact List)
        - Eight (Name List)
        - Nine (Shopping Cart)
        - Ten (Code Creator) 
            - This is my solution to the video Demo Challenge that can be found here [React Exercise - Code App - Part 1](https://www.youtube.com/watch?v=a9q_1reMroc&t=0s).
        - Eleven (Code Creator Remix)
            - This is my solution to the video Demo Challenge that can be found here [React Exercise - Code App - Part 2](https://www.youtube.com/watch?v=3NyoQ0VM_fw&t=0s)
            - I added extra features and gave it my own twist.

    - Go to App.js
        - Uncomment the corresponding import statement at the top
        - Ex:
            ```
                import React, { Component } from "react";
                // import One from './components/One';
                // import Two from './components/Two';
                // import Three from './components/Three';
                // import Four from "./components/Four";
                // import Five from "./components/Five";
                // import Six from "./components/Six";
                // import Seven from "./components/Seven";
                // import Eight from "./components/Eight";
                // import Nine from "./components/Nine";
                // import Ten from "./components/Ten";
                import Eleven from "./components/Eleven";
            ```

         - In the return statement replace the Component name to match the program you would like to run.
            - Ex: 
                ```                              
                class App extends Component {
                render() {
                    return (
                    <div className="App">
                        <Eleven />   <-------- (change this line)
                    </div>
                    );
                }
                }
                ```

### `npm start`

To start the development server. Do this after youve following the directions above.

### Components2 Folder
- Props & Lifting The State

- Directions: 
    - Open the Components2 Folder to see the following programs
        - CountingMachine
        - VisitorSystem
        - PhotosPage
        - Cart 
            - This is my solution to the video demo that can be found here [Exercise after React Course Lesson - #4 - Props and Lifting the State Up - Learn React](https://www.youtube.com/watch?v=1MR0VBx33uk&t=0s)
            - I added minimal styling and decided to get my own data to make this a little more interesting

    - Go to Index.js
        - Uncomment the corresponding import statement at the top to match the program you want to see
        - Ex:
            ```
                import React from 'react';
                import ReactDOM from 'react-dom';
                import './index.css';
                // import App from './App';
                // import reportWebVitals from './reportWebVitals';
                // import CountingMachine from './components2/CountingMachine';    <------(uncomment only one of these)
                // import PhotosPage from './components2/PhotosPage';
                // import VisitorSystem from './components2/VisitorSystem';
                import Cart from './components2/Cart';
            ```

         - In the render statement replace App.Js with the correspoding name in the import statement at the top
            - Ex: 
                ```                              
                ReactDOM.render(
                    <React.StrictMode>
                        <Cart />    <---------(change this line)
                    </React.StrictMode>,
                    document.getElementById('root')
                );
                ```
    -You should only have to refresh the page between following the steps to see each program.