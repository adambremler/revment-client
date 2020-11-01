import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';
import styled, { createGlobalStyle } from 'styled-components';
import { push } from 'connected-react-router';
import NavMenu from './styled/NavMenu';
import NavSearch from './NavSearch';
import NavLogo from './styled/NavLogo';
import NavLogoWrapper from './styled/NavLogoWrapper';
import logo from './img/nav-logo.png';

function PaddedItem({ component, ...props }) {
    const StyledItem = styled(component)`
        padding-top: 20px !important;
        padding-bottom: 20px !important;
    `;

    return <StyledItem {...props} />;
}

const GlobalTopPadding = createGlobalStyle`
    body {
        padding-top: 68px;
    }
`;

function Navbar({ user, pathname, push }) {
    const pushRoute = (e, { name }) => push(name);

    return (
        <>
            <GlobalTopPadding />
            <NavMenu pointing secondary fixed="top">
                <NavLogoWrapper onClick={() => pushRoute(null, { name: '/' })}>
                    <NavLogo src={logo} />
                </NavLogoWrapper>
                <PaddedItem
                    component={Menu.Item}
                    name="/"
                    active={pathname === '/'}
                    content="Home"
                    onClick={pushRoute}
                />
                {/*
                <PaddedItem
                    component={Menu.Item}
                    name="/domains"
                    active={pathname === '/domains'}
                    content="Browse Domains"
                    onClick={pushRoute}
                />
                */}
                <NavSearch />
                <Menu.Menu position="right">
                    {!user && (
                        <>
                            <PaddedItem
                                component={Menu.Item}
                                name="/log-in"
                                active={pathname === '/log-in'}
                                content="Log In"
                                onClick={pushRoute}
                            />
                            <PaddedItem
                                component={Menu.Item}
                                name="/sign-up"
                                active={pathname === '/sign-up'}
                                content="Sign Up"
                                onClick={pushRoute}
                            />
                        </>
                    )}
                    {user && (
                        <>
                            {/*
                            <PaddedItem
                                component={Menu.Item}
                                name="/my-comments"
                                active={pathname === '/my-comments'}
                                content="My Comments"
                                onClick={pushRoute}
                            />
                            */}
                            <PaddedItem
                                item
                                text="Account"
                                component={Dropdown}
                            >
                                <Dropdown.Menu>
                                    {/*
                                    <Dropdown.Item
                                        icon="user"
                                        text="My Profile"
                                    />
                                    <Dropdown.Item
                                        icon="settings"
                                        text="User Settings"
                                    />
                                    */}
                                    <Dropdown.Item
                                        icon="sign-out"
                                        text="Log Out"
                                        name="/log-out"
                                        onClick={pushRoute}
                                    />
                                </Dropdown.Menu>
                            </PaddedItem>
                        </>
                    )}
                </Menu.Menu>
            </NavMenu>
        </>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    pathname: state.router.location.pathname
});

export default connect(
    mapStateToProps,
    { push }
)(Navbar);
