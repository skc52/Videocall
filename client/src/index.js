import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { ContextProvider } from "./SocketContext.js";
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    
        <ContextProvider>
            <App/>
        </ContextProvider>
   
    

);