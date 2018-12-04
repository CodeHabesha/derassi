import React from "react";


const  EditButton = (props) =>
(
    <button
    key={props.cmd}
    onMouseDown={evt => {
      evt.preventDefault(); // Avoids loosing focus from the editable area
      document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
    }}
    >
    {props.name || props.cmd}
    </button>
  );


export default EditButton;
