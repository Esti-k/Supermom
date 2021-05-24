import React from "react";
import { Image } from "react-bootstrap";
import dad from '../../src/dad'
class Login2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Mom = '',
            Dad = '../../src/dad',
            Adi = ''

        }
    }
    render(){
        <div>
            <Image src={this.state.Dad}></Image>
        </div>
    }

}