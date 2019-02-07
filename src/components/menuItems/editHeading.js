
import React from "react";
import executeCommand from './menuHelpers'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    
    // let headings = 
    //     ["h1", "h2", "h3", "h4", "h5", "h6"]
    
 
    // let values =  headings.map( (heading,i) => <DropdownItem  onClick={this.handleChange} value={heading}  key={i}>
    //                                             {heading}
    //                                            </DropdownItem>)
    return(
        <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  className="form-control" color="gainsboro" caret>
          Heading 
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem  onClick={this.handleChange} key={0}>
            <h1>Heading 1</h1>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={1}>
            <h2>Heading 2</h2>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={2}>
            <h3>Heading 3</h3>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={3}>
            <h4>Heading 4</h4>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={4}>
            <h5>Heading 5</h5>
        </DropdownItem>
        <DropdownItem  onClick={this.handleChange} key={5}>
            <h6>Heading 6</h6>
        </DropdownItem>
        </DropdownMenu>
       </ButtonDropdown>

    )
  }
}

export  default EditHeading;