import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class ToolsMenu extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
          });
    }



    render =  () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
         <DropdownToggle  color="white" outline="none" >
            Tools
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        </Dropdown>
       
    )
    
} 
export default ToolsMenu; 

  