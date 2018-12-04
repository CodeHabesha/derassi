import React from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from 'prop-types';
import sanitizeHtml from "sanitize-html";
import {fontStyle} from '../GLOBAL'

class Paragraph extends React.Component {
      constructor(props) {
        super(props);
      }


  componentDidMount() {
    //when page loads the Carot is ready and blinking
    this.element.focus();
    // adds change event on the contentEditable components
    //this.element.addEventListener("input", this.handleChange)
    // this.element.addEventListener('keydown',this.handleChange);
  }


  render = () => {
    return (
      <div>
      <h3>editable contents</h3>
      <div
      contentEditable = {true}
      onKeyPress={this.props.onKeyPress}
      onKeyDown={this.props.onKeyDown}
      ref={(el) => this.element = el}
      >

      </div>

      <h3>actions</h3>
      <EditButton cmd="italic" />
      <EditButton cmd="bold" />
      <EditButton cmd="formatBlock" arg="h1" name="heading" />
      <EditButton
      cmd="createLink"
      arg="https://github.com/lovasoa/react-contenteditable"
      name="hyperlink"
      />


     </div>
   );
 }
}


function EditButton(props) {
  return (
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
}


Paragraph.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  text: PropTypes.array.isRequired
}

export default Paragraph;
