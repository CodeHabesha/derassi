import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import keyboardMap from '../../keyboardMap'
import FileMenu from './fileMenu'

class EditMenu extends FileMenu {


    constructor(props){
        super(props)
    }

    render =  () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
         <DropdownToggle  color="light" >
            {this. getMeaning(['qe', 'y', 'r'], "Edit")}
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
export default EditMenu; 

  