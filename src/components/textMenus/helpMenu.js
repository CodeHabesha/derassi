import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import keyboardMap from '../../keyboardMap'

class HelpMenu extends React.Component {


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


    name = keyboardMap.i + keyboardMap.r + keyboardMap.da + keyboardMap.ta
    
    render =  () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
         <DropdownToggle  color="light"  >
         {this.props.abeshaMenu ? this.name :  "Help" }
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
export default HelpMenu; 

  