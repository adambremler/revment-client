import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppStyle from './AppStyle';
import Home from './Home';
import Navbar from './Navbar';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import LogOut from './LogOut';
import URLComponent from './URL';
import URLGetter from './URL/URLGetter';

export default function App() {
    return (
        <>
            <AppStyle />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/log-in" component={LogIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/log-out" component={LogOut} />
                <Route exact path="/urls" component={URLGetter} />
                <Route exact path="/urls/:id" component={URLComponent} />
            </Switch>
        </>
    );
}
