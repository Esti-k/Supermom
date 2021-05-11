import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import FilterMain from '../components/mainScreenComp/FilterMain';
import EmptyTask from '../components/mainScreenComp/EmptyTask';
import './ManageTasks.css'
import FullTask from '../components/mainScreenComp/FullTask';
import SupermomMain from './SupermomMain'; 

class ManageTasksMom extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    addTask = (task) => {
        console.log(task.title + 'in ManageTasksMom');
        this.props.addTask(task);
    }
    render(){
        return(
            <div className='manage-tasks'>
                <div className='manage-tasks-child'>
                    <h3>Find and edit tasks</h3>
                    <FilterMain></FilterMain>
                    
                </div>
                <div className='manage-tasks-child'>
                    <EmptyTask addTask = {this.addTask}></EmptyTask>
                </div>
{/* The EmptyTask will open when the button will be clicked
//  FullTask will open when clicking a task on the list from the filter */}
{/* Send props */}
                <EmptyTask addTask = {this.addTask}></EmptyTask>
                {/* //will send the task array and a function to add a task to the array */}
                <FullTask></FullTask>
                {/* //will send the task array and a function to add a task to the array */}
            </div>
        )
    }

}
  
export default ManageTasksMom;
  