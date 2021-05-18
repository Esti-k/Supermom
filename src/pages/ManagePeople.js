import React from "react";
import { Container } from "react-bootstrap";
import AddPeople from "../components/mainScreenComp/AddPeople";
import ShowPeople from "../components/mainScreenComp/ShowPeople";

class ManagePeople extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    addPeople = (person) => {
        console.log(person.prefferedSubjects + ' in managePeople')
        this.props.addPeople(person);
    }

    render(){
        return(
            <Container>
                <ShowPeople people = {this.props.people}></ShowPeople>
                <AddPeople addPeople = {this.addPeople} subjects = {this.props.subjects}></AddPeople>
            </Container>
        )
    }

}

export default ManagePeople;