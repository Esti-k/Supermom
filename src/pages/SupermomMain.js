import React from 'react';
import NavbarMain from '../components/mainScreenComp/NavbarMain';
import FilterMain from '../components/mainScreenComp/FilterMain';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import WeekPlan from '../components/mainScreenComp/WeekPlan';
import ManageTasksMom from './ManageTasksMom';

class SupermomMain extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            tasksToDo : [],
            tasksDone : []
        }
    }
    addTask = (task) =>{
        this.setState(
            {
                tasksToDo: this.state.tasksToDo.concat(task)
                debugger;
            }
           
        )
        console.log('in SupermomMain');
        console.log(task);
        console.log(this.state.tasksToDo);
    
    }
    render(){
        return(
            <div>
                <NavbarMain></NavbarMain>
                <FilterMain></FilterMain>
                <WeekPlan></WeekPlan>
                <ManageTasksMom addTask = {this.addTask}></ManageTasksMom>
                {console.log(this.state.tasksToDo + " In Render")}
                {/* {console.log(this.state.tasksToDo[0].title + " In Render")} */}
            </div>
        )
    }

}
  
export default SupermomMain;
  