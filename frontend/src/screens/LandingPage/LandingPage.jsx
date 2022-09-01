import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
//   useEffect(()=>{

//     const userInfo=localStorage.getItem("userInfo");
//     if(userInfo)
//     {
//         history.push("/mynotes")
//     }

// },[history])
  return (
    <div className="main">
      <Container>
        <Row>
            <div className="introText">
                <div>
                    <h1 className="title"> Pen Down</h1>
                    <p className="subtitle">  One Safe place for all your notes</p>
                </div>
                <div className="buttonContainer">
                    <a href="/login">
                        <Button size="lg" className="landingButton">
                            Login
                        </Button>
                      </a>
                    <Link to="/register">
                        <Button size="lg" className="landingButton" variant="outline-primary">
                            Sign Up
                        </Button>
                      </Link>


                </div>
            </div>
        </Row>
        
      </Container>
    </div>
  );
};

export default LandingPage;
