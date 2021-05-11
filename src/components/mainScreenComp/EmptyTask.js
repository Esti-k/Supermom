import React from 'react';
import { Card, Container, ListGroup, ListGroupItem, Form, Col, Row, Modal, Button } from 'react-bootstrap';

class EmptyTask extends React.Component{
    constructor(props){
        //gets addTask(newTask) as props. used in saveModalIvfo
        super(props);//will get the task array and a function to add a task to the array
        this.state = {
                //All the task's data in the form
            isModalOpen: false,
            title: '',
            desc: '',
            date: '',
            time:'',
            assignedTo:'',
            subject:''
        }
    }

    handleClose = () =>{
        this.setState({
            isModalOpen: false,
        })
    }

    saveModalInfo = () =>{

        // TODO: Make sure the task has all the needed fields as expected
        const newTask = {
            title: this.state.title,
            subject: this.state.subject,
            desc: this.state.desc,
            date: this.state.date,
            time: this.state.time,
            assignedTo: this.state.assignedTo
            
        }
        console.log(newTask.title + 'in EmptyTask');
        this.props.addTask(newTask); 

    }


    render(){
        return(
          <Container>
                <Button onClick={()=>{this.setState({isModalOpen:true})}}>Add a Task</Button>
          
                <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add a Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
        

                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                    Title:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        type="text" 
                        placeholder="Task title"
                            value={this.state.title}
                            onChange={(event)=> {this.setState({title: event.target.value})}}
                            />
                    </Col>

                    <Form.Label column sm={2}>
                    Subject:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Task Subject"
                        value={this.state.subject}
                        onChange={(event)=> {this.setState({subject: event.target.value})}}
                        />
                    </Col>

                    <Form.Label column sm={2}>
                    Description:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Task Description"
                        value={this.state.desc}
                        onChange={(event)=> {this.setState({desc: event.target.value})}}
                        />
                    </Col>

                    <Form.Label column sm={2}>
                    Date:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Task Description"
                        value={this.state.date}
                        onChange={(event)=> {this.setState({date: event.target.value})}}
                        />
                    </Col>

                    <Form.Label column sm={2}>
                    Time:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Task Time"
                        value={this.state.time}
                        onChange={(event)=> {this.setState({time: event.target.value})}}
                        />
                    </Col>

                    <Form.Label column sm={2}>
                    Assign to:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Assign to"
                        value={this.state.assignTo}
                        onChange={(event)=> {this.setState({assignTo: event.target.value})}}
                        />
                    </Col>
                   
                    
                    
                </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button type="button" variant="primary" onClick={this.saveModalInfo}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
          </Container>
        )
    }
}

export default EmptyTask;