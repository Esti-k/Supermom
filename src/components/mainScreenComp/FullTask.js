import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Form, Col, Row, Modal, Button } from 'react-bootstrap';


//Gets as props a task with all its data and function updateTask, subject, people, tasksToDo

class FullTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: '',
            // title: this.props.task.title,
            // desc: this.props.task.description,
            // date: this.props.task.date,
            // time:this.props.task.time,
            // assignedTo:this.props.task.assignedTo,
            // subject:this.props.task.subject,
            // done: false

            title: '',
            desc: '',
            date: '',
            time:'',
            assignedTo:'',
            subject:'',
            done: false
        }
    }

        handleClose = () =>{
        this.setState({
            isModalOpen: false,
        })
        this.props.setModalCloseInParent();
    }

    saveModalInfo = () =>{

        // TODO: Make sure the task has all the needed fields as expected
        const updatedTask = {
            title: this.state.title,
            subject: this.state.subject,
            desc: this.state.desc,
            date: this.state.date,
            time: this.state.time,
            assignedTo: this.state.assignedTo,
            // done: this.state.done
        }
        // console.log(newTask.title + 'in EmptyTask');
        this.props.updateTask(updatedTask); 
        this.handleClose();
    }

    setFirstValues(currentTask){
        this.setState({
        title: currentTask.title,
        desc: currentTask.description,
        date: currentTask.date,
        time:currentTask.time,
        assignedTo:currentTask.assignedTo,
        subject:currentTask.subject,
        // done: currentTask.done
        })
    }

    // componentDidMount(){
    //     this.setState({

    //     })
    // }

    render(){
        // const subjectsToChooseFrom = this.props.subjects.map((sub) => {
        //     return (<option>{sub.subject}</option>)
        // })

        // const peopleToChooseFrom = this.props.people.map((person) => {
        //     return (<option>{person.name}</option>)
        // })

        // const currentTask = this.props.tasksToDo.filter((task) => {
        //     if(this.props.tasks.title == task.title)
        //         return true;
        // }
        // )
        // this.setFirstValues(currentTask);
        // this.setState({
        //     isModalOpen : this.props.isModalOpen
        // })
        return(
          <Container>
                {/* <Button onClick={()=>{this.setState({isModalOpen:true})}}>Add a Task</Button> */}
          
                <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
        

                {/* <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                    Title:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        type="text" 
                        placeholder={currentTask.title}
                            value={this.state.title}
                            onChange={(event)=> {this.setState({title: event.target.value})}}
                            />
                    </Col>


                    <Form.Label column sm={2}>
                    Subject:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="select" custom
                            value={this.state.subject}
                            onChange={(event)=> {this.setState({subject: event.target.value})}}
                        >
                                {subjectsToChooseFrom}
                        </Form.Control>
                       
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
                        <Form.Control type="date" placeholder="Task Description"
                        value={this.state.date}
                        onChange={(event)=> {this.setState({date: event.target.value})}}
                        />
                    </Col>

                    <Form.Label column sm={2}>
                    Time:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="time" placeholder="Task Time"
                        value={this.state.time}
                        onChange={(event)=> {this.setState({time: event.target.value})}}
                        />
                    </Col>

                    <Form.Label column sm={2}>
                    Assign to:
                    </Form.Label>
                    <Col sm={10}>

                        <Form.Control as="select" custom
                            value={this.state.assignTo}
                            onChange={(event)=> {this.setState({assignedTo: event.target.value})}}
                        >
                                {peopleToChooseFrom}
                        </Form.Control>

                    </Col>
                   
                    
                    
                </Form.Group> */}

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

export default FullTask;


// ////////////////////////////
// import React from 'react';
// import { Card, Container, ListGroup, ListGroupItem Container, Form, Col, Row, Modal, Button } from 'react-bootstrap';

// class EmptyTask extends React.Component{
//     constructor(props){
//         //gets addTask(newTask) as props. used in saveModalIvfo
//         super(props);//will get the task array and a function to add a task to the array
//         this.state = {
//                 //All the task's data in the form
//             isModalOpen: false,
//             title: '',
//             desc: '',
//             date: '',
//             time:'',
//             assignedTo:'',
//             subject:''
//         }
//     }

//     handleClose = () =>{
//         this.setState({
//             isModalOpen: false,
//             title: '',
//             desc: '',
//             date: '',
//             time:'',
//             assignedTo:'',
//             subject:''
           
//         })
//     }

//     saveModalInfo = () =>{

//         // TODO: Make sure the task has all the needed fields as expected
//         const newTask = {
//             title: this.state.title,
//             subject: this.state.subject,
//             desc: this.state.desc,
//             date: this.state.date,
//             time: this.state.time,
//             assignedTo: this.state.assignedTo
            
//         }
//         console.log(newTask.title + 'in EmptyTask');
//         this.props.addTask(newTask); 
//         this.handleClose();

//     }


//     render(){
//         const subjectsToChooseFrom = this.props.subjects.map((sub) => {
//             return (<option>{sub.subject}</option>)
//         })

//         const peopleToChooseFrom = this.props.people.map((person) => {
//             return (<option>{person.name}</option>)
//         })

//         return(
//           <Container>
//                 <Button onClick={()=>{this.setState({isModalOpen:true})}}>Add a Task</Button>
          
//                 <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
//                 <Modal.Header closeButton>
//                 <Modal.Title>Add a Task</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
        

//                 <Form.Group as={Row} >
//                     <Form.Label column sm={2}>
//                     Title:
//                     </Form.Label>
//                     <Col sm={10}>
//                         <Form.Control 
//                         type="text" 
//                         placeholder="Task title"
//                             value={this.state.title}
//                             onChange={(event)=> {this.setState({title: event.target.value})}}
//                             />
//                     </Col>


//                     <Form.Label column sm={2}>
//                     Subject:
//                     </Form.Label>
//                     <Col sm={10}>
//                         <Form.Control as="select" custom
//                             value={this.state.subject}
//                             onChange={(event)=> {this.setState({subject: event.target.value})}}
//                         >
//                                 {subjectsToChooseFrom}
//                         </Form.Control>
//                         {/* <Form.Control type="text" placeholder="Task Subject"
//                         value={this.state.subject}
//                         onChange={(event)=> {this.setState({subject: event.target.value})}}
//                         /> */}
//                     </Col>

//                     {/* //instead of type text above, change to a select, to select from the existing subjects. use map 
//                     <Form.Control as="select" custom>
//                             <option>Mom</option>
//                             <option>Dad</option>
//                             <option>Adi</option>
//                             <option>Yair</option>
//                             </Form.Control> */}
// {/* 
//                     <Form.Label column sm={2}>
//                     Subject:
//                     </Form.Label>
//                     <Col sm={10}>
//                         <Form.Control type="text" placeholder="Task Subject"
//                         value={this.state.subject}
//                         onChange={(event)=> {this.setState({subject: event.target.value})}}
//                         />
//                     </Col> */}

//                     <Form.Label column sm={2}>
//                     Description:
//                     </Form.Label>
//                     <Col sm={10}>
//                         <Form.Control type="text" placeholder="Task Description"
//                         value={this.state.desc}
//                         onChange={(event)=> {this.setState({desc: event.target.value})}}
//                         />
//                     </Col>

//                     <Form.Label column sm={2}>
//                     Date:
//                     </Form.Label>
//                     <Col sm={10}>
//                         <Form.Control type="date" placeholder="Task Description"
//                         value={this.state.date}
//                         onChange={(event)=> {this.setState({date: event.target.value})}}
//                         />
//                     </Col>

//                     <Form.Label column sm={2}>
//                     Time:
//                     </Form.Label>
//                     <Col sm={10}>
//                         <Form.Control type="time" placeholder="Task Time"
//                         value={this.state.time}
//                         onChange={(event)=> {this.setState({time: event.target.value})}}
//                         />
//                     </Col>

//                     <Form.Label column sm={2}>
//                     Assign to:
//                     </Form.Label>
//                     <Col sm={10}>
//                         {/* <Form.Control type="text" placeholder="Assign to"
//                         value={this.state.assignTo}
//                         onChange={(event)=> {this.setState({assignTo: event.target.value})}}
//                         /> */}

//                         <Form.Control as="select" custom
//                             value={this.state.assignTo}
//                             onChange={(event)=> {this.setState({assignedTo: event.target.value})}}
//                         >
//                                 {peopleToChooseFrom}
//                         </Form.Control>

//                     </Col>
                   
                    
                    
//                 </Form.Group>

//                 </Modal.Body>
//                 <Modal.Footer>
//                 <Button variant="secondary" onClick={this.handleClose}>
//                     Close
//                 </Button>
//                 <Button type="button" variant="primary" onClick={this.saveModalInfo}>
//                     Save Changes
//                 </Button>
//                 </Modal.Footer>
//             </Modal>
//           </Container>
//         )
//     }
// }

// export default EmptyTask;