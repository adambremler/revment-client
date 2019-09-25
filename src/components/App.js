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
import GuestRoute from './common/Routes/GuestRoute';
import ProtectedRoute from './common/Routes/ProtectedRoute';

export default function App() {
    return (
        <>
            <AppStyle />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <GuestRoute exact path="/log-in" component={LogIn} />
                <GuestRoute exact path="/sign-up" component={SignUp} />
                <ProtectedRoute exact path="/log-out" component={LogOut} />
                <Route exact path="/urls" component={URLGetter} />
                <Route exact path="/urls/:id" component={URLComponent} />
            </Switch>
        </>
    );
}
