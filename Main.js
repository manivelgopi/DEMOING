import React, {useState, useEffect} from 'react';
import {Alert, Container, Row, Col, 
    Card, 
    Form, 
    Button, Modal} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import {Link} from "react-router-dom";

export default function Main() {

const initData = {
     home:'',
     propertyValue:'',
     depositValue:'',
     buying:'',
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
        window.location.href = "/steptwo";
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
        <main data-testid="mainForm1">
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
                        <Form.Group className="mb-3" controlId="home">
                            <Form.Label>I’m Thinking about*</Form.Label>
                            <Form.Control
                            data-testid="home"
                            as="select"
                            onChange={handleChange}
                            >
                            
                            <option value="home2">Buying first home</option>
                            <option value="home2">Buying Second home</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                             Please select your option
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="propertyValue">
                            <Form.Label>How much do you think the property will cost*</Form.Label>
                            <Form.Control data-testid="propertyValue" min="100000"  required onChange={handleChange} type="number" 
                            placeholder="100000" />
                            <Form.Text className="text-muted">
                             Property cost more then 100000
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="depositValue">
                            <Form.Label>How much deposit do you have</Form.Label>
                            <Form.Control data-testid="depositValue" min="0" required onChange={handleChange} type="number" 
                            placeholder="50000" />
                            <Form.Text className="text-muted">
                             Deposit cost
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="buying">
                            <Form.Label>Buying property *</Form.Label>
                            <Form.Control
                             data-testid="buying"
                            as="select"
                            onChange={handleChange}
                            >
                            <option value="self">My self</option>
                            <option value="couple">Couple</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                             Please select your option
                            </Form.Text>
                            </Form.Group>
                        </Col>
                       
                    </Row>
                    <hr/>
                    
                    <Row >
                            <Col >
                            <Button data-testid="clearBtn" variant="secondary" type="button">
                                Clear
                            </Button>
                            </Col>
                            <Col>
                            </Col>
                            <Col >
                            <Button 
                            // as={Link} to="/steptwo" 
                            data-testid="applyNowBtn" className="mr-4" variant="primary" type="submit">
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