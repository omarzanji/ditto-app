import React from "react";
import "./App.css";
import {
    Link,
    withRouter
} from "react-router-dom";

class SettingsScreen extends React.Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Settings Screen</h1>
                </header>
                <footer className='App-footer'>
                    <Link to="/">
                        <button className="Nav-button">Go back</button>
                    </Link>
                </footer>
            </div>
        );
    }
    
}

export default withRouter(SettingsScreen);