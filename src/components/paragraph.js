import React from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from 'prop-types';
import sanitizeHtml from "sanitize-html";
import {fontStyle} from '../GLOBAL'

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      html: ""
    };
  }

  // function: sends events to the container Elemnet: Page on input change
  handleChange(e){
     this.props.onChange(e)
  }


  componentDidMount() {
    //when page loads the Carot is ready and blinking 
    this.element.focus();
    // adds change event on the contentEditable components
    this.element.addEventListener("input", this.handleChange)
  }

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "span"],
    allowedAttributes: { a: ["href"] }
  };

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  render = () => {
    return (
      <div>
        <h3>editable contents</h3>
        <div
          contentEditable = {true}
          onKeyPress={this.props.onKeyPress}

          onBlur={this.sanitize}
          ref={(el) => this.element = el}
         >
            {this.state.html}
         </div>
        <h3>source</h3>
        <textarea
          className="editable"
          value={this.state.html}
          onChange={this.handleChange}
          onBlur={this.sanitize}
        />
        <h3>actions</h3>
        <EditButton cmd="italic" />
        <EditButton cmd="bold" />
        <EditButton cmd="formatBlock" arg="h1" name="heading" />
        <EditButton
          cmd="createLink"
          arg="https://github.com/lovasoa/react-contenteditable"
          name="hyperlink"
        />
        <button onClick={this.toggleEditable}>
          Make {this.state.editable ? "readonly" : "editable"}
        </button>
      </div>
    );
  };
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
