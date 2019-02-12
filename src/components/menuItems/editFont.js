import React from "react";
import { fontStyle } from '../../GLOBAL'
import executeCommand from './menuHelpers'
import fonts, { fontsInAmharic, getFamily} from '../fontFamily'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const EditFont = class EditFont extends React.Component {
    constructor(props){
      super(props)
      console.log(fonts, fontsInAmharic)
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
        currentStyle: fontStyle.currentStyle
      };
      this.handleChange = this.handleChange.bind(this)
    }
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen,
        currentStyle: fontStyle.currentStyle
      }));
    }

    handleChange(e){
      console.log(e)
      let index = ( fonts.indexOf(e.target.value) < 0 ? fonts.indexOf(e.target.value) : this.currentIndex )
      console.log(index)
      fontStyle.setFont(fonts[index])
      executeCommand( { cmd: "fontName", arg: fontStyle.cursty } ) 
      this.setState({currentStyle: fontStyle.currentStyle})
  }
  render(){
    console.log(this.state.currentStyle)
    let values =  fonts.map( (font,i) => <DropdownItem ref={ (e) => this.el = e } onClick={this.handleChange}  value={font} key={i}  > {this.props.abeshaMenu ? getFamily(i) : fonts[i]} </DropdownItem>)
    return(
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  color="light" caret>
            {this.props.abeshaMenu ? getFamily(this.currentIndex) : fontStyle.currentStyle}
        </DropdownToggle>
        <DropdownMenu>
          {values} 
        </DropdownMenu>
      </Dropdown>
    )
  }
  }

  export default EditFont;

  