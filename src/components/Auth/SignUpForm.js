import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Icon, Input, Button, Form as SemanticForm } from 'semantic-ui-react';

export default function SignUpForm({ signUp, isLoading, error }) {
    return (
        <Formik
            initialValues={{
                email: '',
                username: '',
                password: ''
            }}
            onSubmit={(values, actions) => {
                signUp(values);
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <SemanticForm.Field>
                        <label>Email</label>
                        <Field
                            name="email"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    iconPosition="left"
                                    placeholder="Email"
                                    disabled={isLoading}
                                    type="email"
                                >
                                    <Icon name="at" />
                                    <input />
                                </Input>
                            )}
                        />
                    </SemanticForm.Field>
                    <ErrorMessage name="email" component="div" />
                    <SemanticForm.Field>
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
                    <ErrorMessage name="username" component="div" />
                    <SemanticForm.Field>
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
                    <ErrorMessage name="password" component="div" />
                    {status && status.msg && <div>{status.msg}</div>}
                    <Button
                        icon
                        labelPosition="right"
                        primary
                        type="submit"
                        disabled={isLoading}
                    >
                        <Icon name="user plus" />
                        Sign up
                    </Button>
                </Form>
            )}
        />
    );
}
