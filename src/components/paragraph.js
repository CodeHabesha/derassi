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
    this.element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        document.execCommand("insertHTML", false, "&nbsp;&nbsp;&nbsp;&nbsp;");
      }
    });
  }

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "span"],
    allowedAttributes: { a: ["href"] }
  };

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  };

  render = () => {
    return (
      <div class="page-container">
        <div
          class           ="editable-page"
          contentEditable = "true"
          onKeyPress      = {this.props.onKeyPress}

          onBlur          = {this.sanitize}
          ref             = {(el) => this.element = el}
         >
            {this.state.html}
         </div>
      </div>
    );
  };
}


Paragraph.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  text: PropTypes.array.isRequired
}

export default Paragraph;
