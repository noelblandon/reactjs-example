import React,{ useState } from 'react';
import { Container, Card, Button, Form, InputGroup} from 'react-bootstrap'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function CreateUser (){
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Container > 
          <Card className="mt-5">
            <Card.Header>Create User</Card.Header>
            <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                
                <Form.Group as={Row}  controlId="validationCustom01">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="validationCustomUsername">
                    <Form.Label column sm={2}>Username</Form.Label>
                    <Col sm={6}>
                       
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                       
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={6}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
               
                
                
                <Row>
                    <Col sm={2}>
                        &nbsp;
                    </Col>
                    <Col sm={6}>
                    <Button type="submit">Submit form</Button>
                    </Col>
                </Row>
                
            </Form>
            </Card.Body>
            </Card> 
            
      </Container>
    );

}

export default CreateUser;