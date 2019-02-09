
import React from 'react'
import executeCommand from './menuHelpers'
import {Button}  from 'reactstrap'
 const  Underline = (props) =>
(
   <button className="btn btn-default btn-sm" 
    outline
    color="none"
    size="sm"
    onClick = {() => executeCommand({cmd: "underline"})}>
    <i className="fa fa-underline"></i> 
    </button>
  );

  export default Underline; 