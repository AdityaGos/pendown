import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css"
import {useDispatch,useSelector} from "react-redux"
import { login } from "../../actions/userActions";

const LoginScreen = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch=useDispatch();

    const userLogin= useSelector((state) =>state.userLogin)
    const {loading,error,userInfo}=userLogin;

    useEffect(() => {
        if(userInfo){ history.push('/mynotes')}
    }, [history,userInfo])
    
    const submiteHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email,password))
        
        
    }
    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger"  >{error}</ErrorMessage>}
                {loading && <Loading/>}
                <Form onSubmit={submiteHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        {" "}
                        New Customer ? <a href="/register"> Register Here</a>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    );
};

export default LoginScreen;
