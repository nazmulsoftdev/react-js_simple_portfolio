import React, { Component } from 'react'
import {Form,Input,FormGroup,Button,Col,Row} from 'reactstrap';



class Contact extends Component {


    constructor() {
     
        super();

        this.state = {
            fName: '',
            lName: '',
            eName: '',
            phName: '',
            mName: '',
            
        }
        this.HandleInput = this.HandleInput.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }


// Form Input Handler
  
    HandleInput = (event) => {

        this.setState({
            [event.target.name]:[event.target.value]
        })
    }


// Form Submit Handler
    HandleSubmit = (event) => {
        
        console.log(this.state);

        this.setState({
            fName: '',
            lName: '',
            eName: '',
            phName: '',
            mName: '',
        });

        event.preventDefault();

    }

     
    render() {
        return (
            <div className="container">
                  
                <Form onSubmit={this.HandleSubmit} className="mt-3">
                    <Row>
                        <Col md={6}>
                            <FormGroup className="mb-2">
                                <Input type="text" name="fName" placeholder="First Name"
                                 value={this.state.fName} onChange={this.HandleInput} required
                                />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="mb-2">
                                <Input type="text" name="lName" placeholder="last Name"
                                 value={this.state.lName} onChange={this.HandleInput} required
                                />
                          </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <FormGroup className="mb-2">
                                <Input type="email" name="eName" placeholder="Email address"
                                  value={this.state.eName} onChange={this.HandleInput} required
                                />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="mb-2">
                                <Input type="number" name="phName" placeholder="Phone"
                                 value={this.state.phName} onChange={this.HandleInput} required 
                                />
                          </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={12}>
                            <FormGroup>
                                <Input type="textarea" name="mName" placeholder="Message" rows="8"
                                 value={this.state.mName} onChange={this.HandleInput} required
                                />
                          </FormGroup>
                        </Col>
                    </Row>
                    <Button className="mt-3" outline color="success">Send</Button>
                </Form>
                 
            </div>
        )
    }
}




export default Contact