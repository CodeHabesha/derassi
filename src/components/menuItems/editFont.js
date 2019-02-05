import React from "react";
import { fontStyle } from '../../GLOBAL'
import executeCommand from './menuHelpers'
import fonts from '../fontFamily'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const EditFont = class EditFont extends React.Component {
    constructor(props){
      super(props)
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
        currentStyle: fontStyle.currentStyle
      };
      this.handleChange = this.handleChange.bind(this)
    }
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
    handleChange(e){
      fontStyle.setFont(e.target.value)
      executeCommand( { cmd: "fontName", arg: e.target.value } ) 
      this.setState( prevState => ({currentSize: fontStyle.currentStyle}))
  }
  render(){
    let values =  fonts.map( (font,i) => <DropdownItem onClick={this.handleChange} value={font}  key={i}> {font} </DropdownItem>)
    return(
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="form-control" color="gainsboro" caret>
            {fontStyle.currentStyle}
        </DropdownToggle>
        <DropdownMenu>
          {values}
        </DropdownMenu>
      </Dropdown>
    )
  }
  }

  export default EditFont;

  