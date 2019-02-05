
import React from "react";
import executeCommand from './menuHelpers'

 const  EditButton = (props) =>
(
    <img
    key={props.cmd}
    className="intLink"
    src={props.img ? props.img : ""}
    title={props.name || props.cmd}
    onMouseDown={evt => {
      evt.preventDefault(); // Avoids loosing focus from the editable area
      executeCommand(props); // Send the command to the browser
    }}
    >
    
    </img>
  );

  export default EditButton; 