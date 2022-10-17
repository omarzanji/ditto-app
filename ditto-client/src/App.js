import React from "react";
import "./screens/App.css";
import {
    HashRouter,
    Redirect,
    Route, 
    Switch,
  } from "react-router-dom";
  
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from './screens/SettingsScreen';
import SignInScreen from './screens/SignInScreen';

class App extends React.Component {
    render () {
        return (
                
            <HashRouter>
                <Redirect to='/' />
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/SettingsScreen' component={SettingsScreen} />
                    <Route exact path='/SignInScreen' component={SignInScreen} />
                </Switch>
            </HashRouter>
            
        );
    }
    
}

export default App;