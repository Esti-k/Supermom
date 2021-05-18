import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import FilterMain from '../components/mainScreenComp/FilterMain';
import EmptyTask from '../components/mainScreenComp/EmptyTask';
import './ManageTasks.css'
import FullTask from '../components/mainScreenComp/FullTask';
import SupermomMain from './SupermomMain'; 
import { HashRouter, Route } from 'react-router-dom';

class ManageTasksMom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            updateTaskOpen : false
        }
    }
    addTask = (task) => {
        // console.log(task.title + 'in ManageTasksMom');
        this.props.addTask(task);
    }

    updateTask = (task) => {
        // console.log(task.title + 'in ManageTasksMom');
        this.props.updateTask(task);
    }

    openTaskUpdate = () =>{
        this.setState({
            updateTaskOpen : true
        })
    }

    showTasks = (filter) => {
        this.props.showTasks(filter);
    }

    setFilter = (filter) => {
        this.props.setFilter(filter);
    }

    setModalCloseInParent(){
        this.setState({
            updateTaskOpen : false
        })
    }

    render(){
        return(
           
                <div className='manage-tasks'>
                    <div className='manage-tasks-child'>
                        <h3>Find and edit tasks</h3>
                        <FilterMain openTaskUpdate={this.openTaskUpdate} setFilter = {this.setFilter} tasksToDo = {this.props.tasksToDo} filter = {this.props.filter} tasksToShow = {this.props.tasksToShow} showTasks = {this.props.showTasks} people = {this.props.people} subjects = {this.props.subjects}></FilterMain>
                        {/* {this.props.tasksToShow} */}
                    </div>
                    
                    <div className='manage-tasks-child'>
                        <EmptyTask addTask = {this.addTask} people = {this.props.people} subjects = {this.props.subjects}></EmptyTask>
                    </div>
                    <div>
                        <FullTask setModalCloseInParent = {this.state.setModalCloseInParent} isModalOpen = {this.state.updateTaskOpen} updateTask = {this.updateTask} people = {this.props.people} subjects = {this.props.subjects} ></FullTask>
                    </div>
                    
    {/* The EmptyTask will open when the button will be clicked
    //  FullTask will open when clicking a task on the list from the filter */}
    {/* Send props */}
                    {/* <EmptyTask addTask = {this.addTask}></EmptyTask> */}
                    {/* //will send the task array and a function to add a task to the array */}
                    
                    {/* <FullTask></FullTask> */}
                    
                    {/* //will send the task array and a function to add a task to the array */}
                </div>
      
        )
    }

}
  
export default ManageTasksMom;
  