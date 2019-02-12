
import React from "react";
import executeCommand from './menuHelpers'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import keyboardMap from '../../keyboardMap'
// 
// issue with not keeping the currnet fornt when heading is execcommand
const EditHeading = class EditFormatblock extends React.Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
        this.handleChange = this.handleChange.bind(this)
    }
    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    handleChange(e){
        
        let text =  e.target.textContent 
        let val = "h" + text[text.length-1]
        console.log(val)
        // document.execCommand("formatBlock", false, val)
        executeCommand( { cmd: "formatBlock", arg: val } ) 
    }

  render(){
    let heading = keyboardMap['t'] + keyboardMap['l'] + keyboardMap['q']
    return(
        <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  className="form-control" color="gainsboro" caret>
          {this.props.abeshaMenu ? heading : "Heading"} 
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem  onClick={this.handleChange} key={0}>
            <h1> {this.props.abeshaMenu ? heading : "Heading"} 1</h1>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={1}>
            <h2>{this.props.abeshaMenu ? heading : "Heading"} 2</h2>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={2}>
            <h3>{this.props.abeshaMenu ? heading : "Heading"} 3</h3>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={3}>
            <h4>{this.props.abeshaMenu ? heading : "Heading"} 4</h4>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={4}>
            <h5>{this.props.abeshaMenu ? heading : "Heading"} 5</h5>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={5}>
            <h6>{this.props.abeshaMenu ? heading : "Heading"} 6</h6>
        </DropdownItem>
        </DropdownMenu>
       </ButtonDropdown>

    )
  }
}

export  default EditHeading;