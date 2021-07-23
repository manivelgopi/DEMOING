import React, {useState, useEffect} from 'react';
import {Alert, Container, Row, Col, 
    Card, 
    Form, 
    Button, Modal} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import {Link} from "react-router-dom";

export default function Maintwo(){

const initData = {
    employement:'',
    occupation:'',
    occupationtype:'',
     doj:'',
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
    }else
        setOk(true);    
    
      
    setValidated(true);
      
    };// handle submit
  
    useEffect(() => {
      if(ok)
      formSubmit();
  
    }, [ok]);
    
    return(
        <main data-testid="mainForm2">
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
                        <Form.Group className="mb-3" controlId="employement">
                            <Form.Label>What is your employement status *</Form.Label>
                            <Form.Control
                            data-testid="employement"
                            as="select"
                            onChange={handleChange}
                            >
                            
                            <option value="employeed">Employeed</option>
                            <option value="self">Self employeed</option>
                            <option value="homemaker">Home Maker</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                             Please select your option
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="occupation">
                            <Form.Label>What is your occupation *</Form.Label>
                            <Form.Control
                            data-testid="occupation"
                            as="select"
                            onChange={handleChange}
                            >
                            <option value="dr">Doctor</option>
                            <option value="er">Engineer</option>
                            <option value="mr">Merchant</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                             Please select your option
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="occupationtype">
                            <Form.Label>What is your contract type *</Form.Label>
                            <Form.Control required
                            data-testid="occupationtype"
                            as="select"
                            onChange={handleChange}
                            >
                            {/* <option >-Select-</option> */}
                            <option value="Permanent">Permanent</option>
                            <option value="Contract">Contract</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                             Please select your option
                            </Form.Text>
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="doj">
                            <Form.Label>When did you started this job?</Form.Label>
                            <Form.Control data-testid="doj" min="0" required onChange={handleChange} 
                            type="date" 
                            placeholder="DD/MM/YYYY" />
                            <Form.Text className="text-muted">
                            You have full time position with salary contract without an end date
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