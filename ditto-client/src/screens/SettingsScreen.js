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
            </div>
        );
    }
    
}

export default withRouter(SettingsScreen);