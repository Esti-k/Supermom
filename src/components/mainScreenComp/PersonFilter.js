import React from 'react'
import { Form  } from 'react-bootstrap';

class PersonFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(

                    // <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Choose Person</Form.Label>
                            <Form.Control as="select" custom>
                            <option>Mom</option>
                            <option>Dad</option>
                            <option>Adi</option>
                            <option>Yair</option>
                            </Form.Control>
                        </Form.Group>
                    // </Form>
        
        );
    }
}

export default PersonFilter;
