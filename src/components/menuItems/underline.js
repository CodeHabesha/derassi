
import React from 'react'
import executeCommand from './menuHelpers'
import {Button}  from 'reactstrap'
 const  Underline = (props) =>
(
   <Button 
    outline
    color="none"
    size="sm"
    onClick = {() => executeCommand({cmd: "underline"})}>
    <i className="fa fa-underline"></i> 
    </Button>
  );

  export default Underline; 