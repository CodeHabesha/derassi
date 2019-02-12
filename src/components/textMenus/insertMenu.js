import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import keyboardMap from '../../keyboardMap'

class InsertMenu extends React.Component {


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


    name = keyboardMap.ua + keyboardMap.s + keyboardMap.ge + keyboardMap.ba 
    render =  () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
         <DropdownToggle  color="light"  >
         {this.props.abeshaMenu ? this.name :  "Insert" }
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
export default InsertMenu; 

  