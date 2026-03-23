import React from "react";
import User from "./User";
import UserClass from './UserClass'
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render(){
    
  return (
      <div>
        <h1>About Us Page</h1>
        <UserClass name = {"Rashmi Karn class component"}/>
      </div>
    )
  }
}


export default About;
