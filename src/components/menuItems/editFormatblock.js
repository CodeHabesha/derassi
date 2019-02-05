
import React from "react";
import executeCommand from './menuHelpers'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const EditFormatblock = class EditFormatblock extends React.Component {
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
        console.log(e.target.value)
        executeCommand( { cmd: "formatBlock", arg: e.target.value } ) 
    }

  render(){
    
    let headings = 
        ["h1", "h2", "h3", "h4", "h5", "h6"]
    
 
    let values =  headings.map( (heading,i) => <DropdownItem onClick={this.handleChange} value={heading}  key={i}> {heading} </DropdownItem>)
    return(
        <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  className="form-control" color="gainsboro" caret>
          Heading 
        </DropdownToggle>
        <DropdownMenu>
            {values}
        </DropdownMenu>
       </ButtonDropdown>

    )
  }
}

export  default EditFormatblock;