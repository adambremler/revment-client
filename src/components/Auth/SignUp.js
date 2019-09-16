import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/userActions';
import { Card, Header, Grid } from 'semantic-ui-react';
import AuthContainer from './styled/AuthContainer';
import AuthCardContent from './styled/AuthCardContent';
import SignUpForm from './SignUpForm';
import SideImage from './styled/SideImage';
import SignUpImg from './img/signup-sidebar.jpg';

function SignUp({ signUp, isLoading, error }) {
    return (
        <AuthContainer>
            <Card fluid raised>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <SideImage src={SignUpImg} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <AuthCardContent>
                            <div className="ui form">
                                <Header as="h1">
                                    <Header.Content>
                                        Join revment
                                        <Header.Subheader>
                                            By having a revment account, you can
                                            join, comment, and vote on all your
                                            favorite revment content.
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <SignUpForm
                                    signUp={signUp}
                                    isLoading={isLoading}
                                    error={error}
                                />
                            </div>
                        </AuthCardContent>
                    </Grid.Column>
                </Grid>
            </Card>
        </AuthContainer>
    );
}

const mapStateToProps = state => ({
    isLoading: state.signUp.isLoading,
    error: state.signUp.error
});

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUp(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
