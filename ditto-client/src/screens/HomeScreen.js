import React from "react";
import "./App.css";
import {
    Link,
    withRouter
} from "react-router-dom";

class HomeScreen extends React.Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Home Screen</h1>
                </header>
                <footer className="App-footer">
                    <Link to="/SettingsScreen">
                        <button className="Nav-button">Settings</button>
                    </Link>
                </footer>
            </div>
        );
    }
    
}

export default withRouter(HomeScreen);