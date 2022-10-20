import React from "react";
import "./App.css";
import {
    Link,
    withRouter
} from "react-router-dom";
import Divider from '@mui/material/Divider';

import { status } from "../models/Status";
import ChatBubbles from "../components/ChatBubbles";

class HomeScreen extends React.Component {
    render () {
        return (
            <div className='App'>
                <header className='App-header'>
                    <h2>Ditto Dashboard</h2>
                </header>
                <Divider />
                <div className='Status'>
                    <p className='Status-text'>Power:</p>
                    <p className='Status-indicator'>{status.power}</p>
                </div>
                <Divider />
                <div className='App-body'>
                    <ChatBubbles />
                </div>
                <footer className='App-footer'>
                    <Link to="/SettingsScreen">
                        <button className="Nav-button">Settings</button>
                    </Link>
                </footer>
            </div>
        );
    }
    
}

export default withRouter(HomeScreen);