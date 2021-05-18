import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
// import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import SupermomMain from './pages/SupermomMain'
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageTasksMom from './pages/ManageTasksMom';
import ManageSubjects from './pages/ManageSubjects';
import ManagePeople from './pages/ManagePeople';
import NavbarMain from './components/mainScreenComp/NavbarMain';
import { HashRouter, Route} from 'react-router-dom';
import {Col, Card} from 'react-bootstrap';
import React from 'react';

class App extends React.Component {

      constructor(props){
        super(props);
        
        this.state = {
            tasksToDo : [],
            // Maybe find done tasks dinamically?
            tasksDone : [],
            // tasksToShow : [{title : 'a'},{title : 'b'}],
            tasksToShow : [],
            // <Card><h1>{task.title}</h1><p>{task.desc}</p><h5>{task.date}+' '+{task.time}</h5><h5>{task.assignedTo}</h5></Card>
            subjects : [{subject:'Choose a Subject'},{subject:'Fun'},{subject:'Studies'}],
            people: [{name:'Choose a Person'},{name: 'Mom'}, {name: 'Dad'}, {name: 'Adi'}],
            //  filter:{name: '', subject:'', date: ''}
            filter:{name:'', subject:'', date:''}
        }
    }

    // title: this.state.title,
    //         subject: this.state.subject,
    //         desc: this.state.desc,
    //         date: this.state.date,
    //         time: this.state.time,
    //         assignedTo: this.state.assignedTo

    showTasks = (filter) => {

      // Change tasksToShow to filtered tasks
      // this.setState({
      //   tasksToShow : this.state.tasksToDo 
      // })
     
      // const tasksCards = this.state.tasksToDo.map((task, index) => {
      //   return(
      //       <Col lg={3} md={6} sm={12}>
      //               <Card><h1>{task.title}</h1><p>{task.desc}</p><h5>{task.date}+' '+{task.time}</h5><h5>{task.assignedTo}</h5></Card>
      //        </Col>
      //   )
    }

    // )
    // return tasksCards;
    
    setFilter = (myFilter) => {

      // if (myFilter.hasOwnProperty('name')){
      //   this.setState(
      //     {
      //         filter.name: myFilter.name
      //     }      
      //   )
      // }
      // else if (myFilter.hasOwnProperty('subject')){
      //   this.setState(
      //     {
      //         filter.subject: myFilter.subject
      //     }      
      //   )
      // }

      this.setState(
        {
            filter: myFilter
        }      
      )
      // this.state.filter.name = filter.name;
      // this.state.filter.subject = filter.subject;
    }

    updateTask = (task) => {
      // Update the task
     
  }

    addTask = (task) =>{
      let helper = this.state.tasksToDo.concat(task);
      this.setState(
          {
              tasksToDo: helper 
          }      
      )
    }

    addSubject = (sub) =>{
      let helper = this.state.subjects.concat(sub);
      // console.log(sub.subject + ' in add subject')
      // console.log(helper[0].subject + ' in add subject')
      this.setState(
          {
            subjects: helper 
          }      
      )
      }

      addPeople = (person) =>{
        console.log(person);
        let helper = this.state.people.concat(person);
        console.log(`${helper[3].name} + ${helper[3].bday}+${helper[3].prefferedSubjects}+${helper[3].permission} + in app add people`)
        this.setState(
            {
              people: helper 
            }      
        )
        }

    removeSubject = (subject) =>{
      // let helper = ???;
      // this.setState(
      //     {
      //       subjects: helper 
      //     }      
      // )
    }

      render(){
        
        return (

        <HashRouter>

          <NavbarMain></NavbarMain>
          <Route exact path="/">
            <SupermomMain setFilter = {this.setFilter} tasksToDo = {this.state.tasksToDo} filter = {this.state.filter} tasksToShow = {this.state.tasksToShow} showTasks = {this.showTasks} people = {this.state.people} subjects = {this.state.subjects}></SupermomMain>
          </Route>
          <Route exact path="/manageTasks">
            <ManageTasksMom setFilter = {this.setFilter} tasksToDo = {this.state.tasksToDo} filter = {this.state.filter} tasksToShow = {this.state.tasksToShow} showTasks = {this.showTasks} addTask = {this.addTask} people={this.state.people} subjects = {this.state.subjects}></ManageTasksMom>
          </Route>
          <Route exact path="/manageSubjects">
            <ManageSubjects filter = {this.state.filter} addSubject = {this.addSubject} subjects = {this.state.subjects}></ManageSubjects>
          </Route>
          <Route exact path="/managePeople">
            <ManagePeople filter = {this.state.filter} addPeople = {this.addPeople} people = {this.state.people} subjects= {this.state.subjects}></ManagePeople>
          </Route>
        </HashRouter>
      )
    }
      }

  
export default App;
