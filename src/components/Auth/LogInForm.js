import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Icon,
    Input,
    Button,
    Form as SemanticForm,
    Message,
    Grid
} from 'semantic-ui-react';
import AuthFieldError from './styled/AuthFieldError';

const LogInSchema = Yup.object().shape({
    username: Yup.string().required('Enter a username'),
    password: Yup.string().required('Enter a password')
});

export default function LogInForm({ logIn, isLoading, error }) {
    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={LogInSchema}
            onSubmit={(values, actions) => {
                logIn(values);
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <SemanticForm.Field error={errors.username}>
                        <label>Username</label>
                        <Field
                            name="username"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    iconPosition="left"
                                    placeholder="Username"
                                    disabled={isLoading}
                                >
                                    <Icon name="user" />
                                    <input />
                                </Input>
                            )}
                        />
                    </SemanticForm.Field>
                    <ErrorMessage name="username" component={AuthFieldError} />
                    <SemanticForm.Field error={errors.password}>
                        <label>Password</label>
                        <Field
                            name="password"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    iconPosition="left"
                                    placeholder="Password"
                                    disabled={isLoading}
                                    type="password"
                                >
                                    <Icon name="lock" />
                                    <input />
                                </Input>
                            )}
                        />
                    </SemanticForm.Field>
                    <ErrorMessage name="password" component={AuthFieldError} />
                    {error && <Message negative>{error}</Message>}
                    <Grid columns={1}>
                        <Grid.Column only="mobile">
                            <Button
                                fluid
                                size="large"
                                loading={isLoading}
                                icon
                                labelPosition="right"
                                primary
                                type="submit"
                                disabled={isLoading}
                            >
                                <Icon name="sign in" />
                                Log In
                            </Button>
                        </Grid.Column>
                        <Grid.Column only="computer tablet">
                            <Button
                                loading={isLoading}
                                icon
                                labelPosition="right"
                                primary
                                type="submit"
                                disabled={isLoading}
                            >
                                <Icon name="sign in" />
                                Log In
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Form>
            )}
        />
    );
}
