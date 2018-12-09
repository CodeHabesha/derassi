import React from "react";


class EditButton extends React.Component {
  render() {
    return (
      <button
        key={this.props.cmd}
        onMouseDown={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(this.props.cmd, false, this.props.arg); // Send the command to the browser
        }}
      >
        {this.props.name || this.props.cmd}
      </button>
    );
  }
}


export default EditButton;
