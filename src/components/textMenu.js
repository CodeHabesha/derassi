import React from 'react'
import { Nav, Navbar, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class TextMenu extends  React.Component {
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

    style={ borderBottomStyle: 'solid',
    borderBottomWidth: 'thin',
    borderBottomColor: 'gainsboro',
    height: 50
    }

    render = () => (
    <Navbar color="light" style={this.style}>
        <Nav >
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="white" >
           File
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
         </Nav>
     </Navbar>
    )
}

export default TextMenu; 