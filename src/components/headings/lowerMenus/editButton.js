
import React from "react";
import executeCommand from './menuHelpers'
import {Button}  from 'reactstrap'
 const  EditButton = (props) =>
(
   <Button 
    size="sm"
    color="light"
    key={props.cmd}
    title={props.cmd}
    onClick = {() => executeCommand(props)}>
    <i className={props.icon}></i> 
    </Button>
  );

  export default EditButton; 