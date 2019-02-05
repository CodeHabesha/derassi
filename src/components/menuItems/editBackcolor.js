
import React from "react";
import executeCommand from './menuHelpers'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const EditBackcolor = class EditBackcolor extends React.Component {
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
        executeCommand( { cmd: "backcolor", arg: e.target.value } ) 
    }

  render(){
    
    let colors = 
        ["Black", "White", "Red", "Yellow"]
    
 
    let values =  colors.map( (color,i) => <DropdownItem onClick={this.handleChange} value={color}  key={i}> {color} </DropdownItem>)
    return(
        <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  className="form-control" color="gainsboro" caret>
          Highlight
        </DropdownToggle>
        <DropdownMenu>
            {values}
        </DropdownMenu>
       </ButtonDropdown>

    )
  }
}

export  default EditBackcolor;