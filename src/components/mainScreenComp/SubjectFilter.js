import React from 'react'
import { Form  } from 'react-bootstrap';

class SubjectFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(

                    // <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Choose Subject</Form.Label>
                            <Form.Control as="select" custom>
                            <option>Sub1</option>
                            <option>Sub2</option>
                            <option>Sub3</option>
                            <option>Sub4</option>
                            </Form.Control>
                        </Form.Group>
                    // </Form>
        
        );
    }
}

export default SubjectFilter;