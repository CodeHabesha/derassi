 const executeCommand = (props) => {
    document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
  }

  export default executeCommand;

