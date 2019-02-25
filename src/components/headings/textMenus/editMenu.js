import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import keyboardMap from '../../keyboardMap'
import FileMenu from './fileMenu'

class EditMenu extends FileMenu {


    constructor(props) {
        super(props)
    }

    render = () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
            <DropdownToggle color="light" >
                {this.getMeaning(['qe', 'y', 'r'], "Edit")}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem><i className="fa fa-undo fa-sm"></i> {this.getMeaning(['me', 'l', 's'], "Undo")}</DropdownItem>
                <DropdownItem><i className="fa fa-redo fa-sm"></i> {this.getMeaning(['d', 'ge', 'm'], "Redo")}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><i className="fa fa-cut fa-sm"></i> {this.getMeaning(['koo', 're', 'tc'], "Cut")} </DropdownItem>
                <DropdownItem><i className="fa fa-copy fa-sm"></i> {this.getMeaning(['ge', 'l', 'b', 'tc'], "Copy")} </DropdownItem>
                <DropdownItem><i className="fa fa-paste fa-sm"></i> {this.getMeaning(['tca', 'l'], "Paste")} </DropdownItem>
                <DropdownItem>{this.getMeaning(['ua', 'tc', 'fa'], "Delete")} </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>{this.getMeaning(['fe', 'l', 'g', 'na', " ", 'te', 'ka'], "Find and replace")}</DropdownItem>
            </DropdownMenu>
        </Dropdown>

    )

}
export default EditMenu;

