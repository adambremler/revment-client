import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Icon,
    Input,
    Button,
    Form as SemanticForm,
    Message
} from 'semantic-ui-react';
import AuthFieldError from './styled/AuthFieldError';

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .min(3, 'Email must be between 3 and 40 characters')
        .max(40, 'Email must be between 3 and 40 characters')
        .required('Enter an email address'),
    username: Yup.string()
        .min(3, 'Username must be between 3 and 20 characters')
        .max(20, 'Username must be between 3 and 20 characters')
        .required('Enter a username'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Enter a password')
});

export default function SignUpForm({ signUp, isLoading, error }) {
    return (
        <Formik
            initialValues={{
                email: '',
                username: '',
                password: ''
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values, actions) => {
                signUp(values);
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <SemanticForm.Field error={errors.email}>
                        <label>Email</label>
                        <Field
                            name="email"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    iconPosition="left"
                                    placeholder="Email"
                                    disabled={isLoading}
                                >
                                    <Icon name="at" />
                                    <input />
                                </Input>
                            )}
                        />
                    </SemanticForm.Field>
                    <ErrorMessage name="email" component={AuthFieldError} />
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
                    <Button
                        icon
                        labelPosition="right"
                        primary
                        type="submit"
                        disabled={isLoading}
                    >
                        <Icon name="user plus" />
                        Sign Up
                    </Button>
                </Form>
            )}
        />
    );
}
