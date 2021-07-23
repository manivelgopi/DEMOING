import React, {useState, useEffect} from 'react';
import {Alert, Container, Row, Col, 
    Card, 
    Form, 
    Button, Modal} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import {Link} from "react-router-dom";

export default function Mainfour(){

const initData = {
    contact:'',
    email:'',
    cemail:''
    };
    //const dispatch = useDispatch();

    //const state = useSelector(state => state);

  
    const [formData, setformData] = useState(initData);
    //const [userData, setUserData] = useState({});
   
    let formInputControl, formInputValue; 

    const handleChange = (e) => {
            e.preventDefault();
            
            formInputControl = e.target.id;
            formInputValue = DOMPurify.sanitize(e.target.value);
            
            if(formInputControl === "cemail" && initData.email === formInputValue )
             console.log("ok")
             else
             console.log("not")

            setformData(inputs => ({...inputs, [formInputControl]:formInputValue }));
            setOk(false);
            console.log(formData);
    }

    // useEffect(() => {
    //     if(state.cardData)
    //     setUserData(state);
    //     else
    //     setUserData([]);

    //     return () => {
    //         setUserData([]);
    //     }
    // }, [state.cardData, state, formData])

    const formSubmit = () => {
        console.log(formData);
        //dispatch({type:"SUBMIT", payload: formData });
        
    }
    
    const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);

    const [validated, setValidated] = useState(false);
    const [ok, setOk] = useState(false);

    const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    console.log( form.checkValidity());
    
    if (form.checkValidity() === false) {
        setOk(false);
        setShow(false)
        event.stopPropagation();
    }else{
        setOk(true); 
        
    }
    setValidated(true);
    
      
    };// handle submit
  
    useEffect(() => {
      if(ok)
      formSubmit();
  
    }, [ok]);
    
    return(
        <main data-testid="mainForm4">
        <Container>
        <Row>
            <Col md={11}>
            <Card className="mx-auto my-3">
{/*            
           {error && <Alert variant={"danger"}>
                {error}
            </Alert>
            } */}
                <Card.Body>
                    <Card.Title className="text-primary">
                        <h1>Mortgages + signups</h1></Card.Title><hr/>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="contact">
                            <Form.Label>Contact details</Form.Label>
                            <Form.Control data-testid="contact" 
                             required
                             onChange={handleChange} type="number" 
                             placeholder="90000XXXXX" />
                            <Form.Text className="text-muted">
                            Please enter your contact details
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control data-testid="email" 
                            required onChange={handleChange} type="email" 
                            placeholder="name@example.du" />
                            <Form.Text className="text-muted">
                             Please enter your email id
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cemail">
                            <Form.Label>Confirm email</Form.Label>
                            <Form.Control data-testid="cemail" 
                            required onChange={handleChange} type="email" 
                            placeholder="Re-enter email" />
                            <Form.Text className="text-muted">
                            Please enter your confirm email id
                            </Form.Text>
                        </Form.Group>

                        </Col>
                       
                    </Row>
                    <hr/>
                    
                    <Row >
                            <Col className="md-3">
                            <Button as={Link} to="/" data-testid="clearBtn" variant="secondary" type="button">
                                Back
                            </Button>
                            </Col>
                            <Col>
                            </Col>
                            <Col className="md-3">
                            <Button data-testid="applyNowBtn" className="mr-4" variant="primary" type="submit">
                                Next
                            </Button>
                            </Col>
                            
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            </Col>

           
        </Row>
        </Container>
        </main>
    )
};