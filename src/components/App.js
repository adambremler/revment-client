import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppStyle from './AppStyle';
import Home from './Home';
import Navbar from './Navbar';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';

export default function App() {
    return (
        <>
            <AppStyle />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/log-in" component={LogIn} />
                <Route exact path="/sign-up" component={SignUp} />
            </Switch>
        </>
    );
}
