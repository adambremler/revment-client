import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import { push } from 'connected-react-router';

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

function Navbar({ push }) {
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        push(`/${name}`);
    };

    return (
        <Menu pointing secondary>
            <NavLogoWrapper onClick={() => handleItemClick(null, { name: '' })}>
                <NavLogo src={logo} />
            </NavLogoWrapper>
            <PaddedItem
                component={Menu.Item}
                name=""
                active={activeItem === ''}
                content="Home"
                onClick={handleItemClick}
            />
            <PaddedItem
                component={Menu.Item}
                name="domains"
                active={activeItem === 'domains'}
                content="Browse Domains"
                onClick={handleItemClick}
            />
            <NavSearch />
            <Menu.Menu position="right">
                <PaddedItem
                    component={Menu.Item}
                    name="signin"
                    active={activeItem === 'signin'}
                    content="Sign In"
                    onClick={handleItemClick}
                />
                <PaddedItem
                    component={Menu.Item}
                    name="signup"
                    active={activeItem === 'signup'}
                    content="Sign Up"
                    onClick={handleItemClick}
                />
                <PaddedItem
                    component={Menu.Item}
                    name="mycomments"
                    active={activeItem === 'mycomments'}
                    content="My Comments"
                    onClick={handleItemClick}
                />
                <PaddedItem item text="Account" component={Dropdown}>
                    <Dropdown.Menu>
                        <Dropdown.Item icon="user" text="My Profile" />
                        <Dropdown.Item icon="settings" text="User Settings" />
                        <Dropdown.Item icon="sign-out" text="Log Out" />
                    </Dropdown.Menu>
                </PaddedItem>
            </Menu.Menu>
        </Menu>
    );
}

export default connect(
    null,
    { push }
)(Navbar);
