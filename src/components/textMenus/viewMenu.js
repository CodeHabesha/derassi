import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import FileMenu from './fileMenu'

class ViewMenu extends FileMenu {


    constructor(props) {
        super(props)
    }

    render = () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
            <DropdownToggle color="light" >
                {this.getMeaning(['ue', 's', 'te', 'ya', 'ye', 't'], "View")}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>{this.getMeaning(['ua', 's', 'te', 'ta', 'te', 'm'], "Print layout")}</DropdownItem>
                <DropdownItem>{this.getMeaning(['ma', 's', 'me', 'ree', 'ya'], "Show ruler")}</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem>{this.getMeaning(['moo', 'loo', ' ', 'ge', 'pc'], "Fullscreen")}</DropdownItem>
            </DropdownMenu>
        </Dropdown>

    )

}
export default ViewMenu; 

  