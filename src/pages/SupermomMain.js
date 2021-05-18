import React from 'react';
import NavbarMain from '../components/mainScreenComp/NavbarMain';
import FilterMain from '../components/mainScreenComp/FilterMain';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import WeekPlan from '../components/mainScreenComp/WeekPlan';
import ManageTasksMom from './ManageTasksMom';
import PersonFilter from '../components/mainScreenComp/PersonFilter';
import SubjectFilter from '../components/mainScreenComp/SubjectFilter';

class SupermomMain extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            // tasksToDo : [],
            // tasksDone : []
        }
    }

    setFilter = (filter) => {
        this.props.setFilter(filter);
    }

    // addTask = (task) =>{
    //     let helper = this.state.tasksToDo.concat(task);
    //     this.setState(
    //         {
    //             tasksToDo: helper 
    //         }      
    //     )
    // }
    render(){
        return(
            <div>
                {/* <NavbarMain></NavbarMain> */}
                {/* <FilterMain tasksToDo = {this.props.tasksToDo} setFilter = {this.setFilter} filter = {this.props.filter} tasksToShow = {this.props.tasksToShow} showTasks = {this.props.showTasks} people = {this.props.people} subjects = {this.props.subjects}></FilterMain> */}
                <PersonFilter setFilter = {this.setFilter} people = {this.props.people}></PersonFilter>
                <SubjectFilter subjects = {this.props.subjects} setFilter = {this.setFilter}></SubjectFilter>
                <WeekPlan></WeekPlan>
                {/* <ManageTasksMom addTask = {this.addTask}></ManageTasksMom> */}
                {/* {console.log(this.state.tasksToDo + " In Render")} */}
                {/* {console.log(this.state.tasksToDo[0].title + " In Render")} */}
                {/* {this.props.tasksToShow} */}
            </div>
        )
    }

}
  
export default SupermomMain;
  