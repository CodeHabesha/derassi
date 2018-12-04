import React from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from 'prop-types';
import sanitizeHtml from "sanitize-html";
import {fontStyle} from '../GLOBAL'
import EditButton from './editButton'
import Paragraph from './paragraph'
import Page from '../containers/page'

class Paragraphs extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          paragraphArray: [Page]
        }
        this.addParagraph = this.addParagraph.bind(this)
      }


      addParagraph(e){


        if(e.key === 'Enter' ) {
          //formatDoc(dispatch, e.target, "insertHTML", "<br/>")
          console.log("entered...")
           this.state.paragraphArray.push(Page)
        }


      }


  render = () => {

    let paras = this.state.paragraphArray.map( (e) => e )

    return (
      <div onKeyPress={this.addParagraph}>
      <h3>actions</h3>
      <EditButton cmd="italic" />
      <EditButton cmd="bold" />
      <EditButton cmd="formatBlock" arg="h1" name="heading" />
      <EditButton
      cmd="createLink"
      arg="https://github.com/lovasoa/react-contenteditable"
      name="hyperlink"
      />

      //  <Page/>
      {paras}

     </div>
   );
 }
}




Paragraphs.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  text: PropTypes.array.isRequired
}

export default Paragraphs;
