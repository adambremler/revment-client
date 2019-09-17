import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { Card, Header, Grid } from 'semantic-ui-react';
import AuthContainer from './styled/AuthContainer';
import AuthCardContent from './styled/AuthCardContent';
import LogInForm from './LogInForm';
import SideImage from './styled/SideImage';
import LogInImg from './img/log-in-sidebar.jpg';

function LogIn({ logIn, isLoading, error }) {
    return (
        <AuthContainer>
            <Card fluid raised>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <SideImage src={LogInImg} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <AuthCardContent topPadding={error ? '125px' : '140px'}>
                            <div className="ui form">
                                <Header as="h1">
                                    <Header.Content>Log In</Header.Content>
                                </Header>
                                <LogInForm
                                    logIn={logIn}
                                    isLoading={isLoading}
                                    error={error}
                                />
                                <p>
                                    New to revment?{' '}
                                    <Link to="/sign-up">Sign up</Link>
                                </p>
                            </div>
                        </AuthCardContent>
                    </Grid.Column>
                </Grid>
            </Card>
        </AuthContainer>
    );
}

const mapStateToProps = state => ({
    isLoading: state.logIn.isLoading,
    error: state.logIn.error
});

const mapDispatchToProps = dispatch => ({
    logIn: user => dispatch(logIn(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn);
