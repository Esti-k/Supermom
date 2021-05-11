import React from 'react'
import PersonFilter from './PersonFilter';
import SubjectFilter from './SubjectFilter';
import DateFilter from './DateFilter';
import { Form, Button  } from 'react-bootstrap';


class FilterMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Form>
                <PersonFilter></PersonFilter>
                <SubjectFilter></SubjectFilter>
                <DateFilter></DateFilter>
                <Button variant="primary" type='button'>Find Tasks</Button>
            </Form>
        )
    }
}

export default FilterMain;