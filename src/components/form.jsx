import React from 'react';
import {
    Container,
    Form,
    Button
} from 'react-bootstrap';

import '../assets/css/form.css'
function FormBox() {
    return (
        <Container className="form-container mr-5">
            <h3 className="text-center mt-5 pt-3">Start Contributing Now</h3>
            <Form>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <h6 className="text-center">Already have an account?
                    <a href='/login'> Log In</a>
                </h6>
                <div className='text-center'>
                    <Button className="mb-4 mt-3" variant="dark" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>

    )
}

export default FormBox;
