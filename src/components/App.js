import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppStyle from './AppStyle';
import Home from './Home';
import Navbar from './Navbar';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

export default function App() {
    return (
        <>
            <AppStyle />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </>
    );
}
