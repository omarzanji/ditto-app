import React from "react";
import "./App.css";
import {
    Link,
} from "react-router-dom";
import Divider from '@mui/material/Divider';

import { status } from "../models/Status";
import ChatBubbles from "../components/ChatBubbles";
import SendMessage from "../components/SendMessage";

class HomeScreen extends React.Component {
    render () {
        return (
            <div className='App'>
                <header className='App-header'>
                    <h2>Ditto Dashboard</h2>
                </header>
                <Divider />
                <div className="StatusBar">
                    <div className='Status'>
                        <p className='Status-text'>Power:</p>
                        <p className='Status-indicator'>{status.power}</p>
                    </div>
                    <div className='Status'>
                        <p className='Status-text'>Volume:</p>
                        <p className='Status-indicator'>{status.volume}</p>
                    </div>
                </div>
                <Divider />
                <div className='App-body'>
                    <ChatBubbles />
                    <Divider />
                    <SendMessage />
                </div>
                <footer className='App-footer'>
                    <Divider />
                    <Link to="/SettingsScreen">
                        <button className="Nav-button">Settings</button>
                    </Link>
                </footer>
            </div>
        );
    }
    
}

export default HomeScreen;