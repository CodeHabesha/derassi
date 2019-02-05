
import React from "react";
import executeCommand from './menuHelpers'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// requires props with ({title: String, cmd: String(execCommand), items:Array})
const EditSelected = class EditSelected extends React.Component {
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
        executeCommand( { cmd: this.props.cmd, arg: e.target.value } ) 
    }

  render(){
    
    let items = this.props.items
    let values =  items.map( (item,i) => <DropdownItem onClick={this.handleChange} value={color}  key={i}> {item} </DropdownItem>)
    return(
        <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  className="form-control" color="gainsboro" caret>
          {this.props.title}
        </DropdownToggle>
        <DropdownMenu>
            {values}
        </DropdownMenu>
       </ButtonDropdown>

    )
  }
}

export  default EditSelected;