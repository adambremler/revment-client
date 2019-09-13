import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
    Icon,
    Input,
    Button,
    Card,
    Form as SemanticForm
} from 'semantic-ui-react';
import AuthContainer from './styled/AuthContainer';

export default function SignUp() {
    return (
        <AuthContainer>
            <Card fluid raised>
                <Card.Content>
                    <div className="ui form">
                        <h1>Sign Up</h1>
                        <Formik
                            initialValues={{
                                email: '',
                                username: '',
                                password: ''
                            }}
                            onSubmit={(values, actions) => {
                                actions.setSubmitting(false);
                                /* MyImaginaryRestApiCall(user.id, values).then(
                        updatedUser => {
                            actions.setSubmitting(false);
                            updateUser(updatedUser);
                            onClose();
                        },
                        error => {
                            actions.setSubmitting(false);
                            actions.setErrors(
                                transformMyRestApiErrorsToAnObject(error)
                            );
                            actions.setStatus({
                                msg: 'Set some arbitrary status or data'
                            });
                        }
                    ); */
                            }}
                            render={({
                                errors,
                                status,
                                touched,
                                isSubmitting
                            }) => (
                                <Form>
                                    <SemanticForm.Field>
                                        <label>Email</label>
                                        <Field
                                            name="email"
                                            render={({
                                                field,
                                                form: { isSubmitting }
                                            }) => (
                                                <Input
                                                    {...field}
                                                    iconPosition="left"
                                                    placeholder="Email"
                                                    disabled={isSubmitting}
                                                    type="email"
                                                >
                                                    <Icon name="at" />
                                                    <input />
                                                </Input>
                                            )}
                                        />
                                    </SemanticForm.Field>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                    />
                                    <SemanticForm.Field>
                                        <label>Username</label>
                                        <Field
                                            name="username"
                                            render={({
                                                field,
                                                form: { isSubmitting }
                                            }) => (
                                                <Input
                                                    {...field}
                                                    iconPosition="left"
                                                    placeholder="Username"
                                                    disabled={isSubmitting}
                                                >
                                                    <Icon name="user" />
                                                    <input />
                                                </Input>
                                            )}
                                        />
                                    </SemanticForm.Field>
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                    />
                                    <SemanticForm.Field>
                                        <label>Password</label>
                                        <Field
                                            name="password"
                                            render={({
                                                field,
                                                form: { isSubmitting }
                                            }) => (
                                                <Input
                                                    {...field}
                                                    iconPosition="left"
                                                    placeholder="Password"
                                                    disabled={isSubmitting}
                                                    type="password"
                                                >
                                                    <Icon name="lock" />
                                                    <input />
                                                </Input>
                                            )}
                                        />
                                    </SemanticForm.Field>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                    />
                                    {status && status.msg && (
                                        <div>{status.msg}</div>
                                    )}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        />
                    </div>
                </Card.Content>
            </Card>
        </AuthContainer>
    );
}
