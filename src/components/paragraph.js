import React from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from 'prop-types';
import sanitizeHtml from "sanitize-html";
import {fontStyle} from '../GLOBAL'
import EditButton from './editButton'

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
      <div
      contentEditable = {true}
      onKeyPress={this.props.onKeyPress}
      onKeyDown={this.props.onKeyDown}
      ref={(el) => this.element = el}
      >
      </div>
   );
 }
}




Paragraph.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  text: PropTypes.array.isRequired
}

export default Paragraph;
