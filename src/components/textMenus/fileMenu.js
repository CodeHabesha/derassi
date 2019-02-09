import React from 'react'
import { UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'reactstrap'
import keyboardMap from '../../keyboardMap'

class FileMenu extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this)
        this.shareFile = this.shareFile.bind(this)
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
          });
    }
    shareFile(e){
        console.log(" share file ....", e)
    }
    name = keyboardMap.f + keyboardMap.ye + keyboardMap.li
    render =  () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="light" >
            {this.props.abeshaMenu ? "File" : this.name}
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={this.shareFile}>Share</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>New</DropdownItem>
            <DropdownItem>Open</DropdownItem>
            <DropdownItem>Make a copy</DropdownItem>
            <DropdownItem>Rename</DropdownItem>
            <DropdownItem>Save</DropdownItem>
            <DropdownItem>Save as ...</DropdownItem>
            <DropdownItem><i className="fas fa-folder"></i>  Move</DropdownItem>
            <DropdownItem><i className="fas fa-trash-alt"></i>  Trash</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Download as PDF</DropdownItem>
            <DropdownItem tag="a" onHover={console.log("hoverd")}>Email as<i className="dropright" ></i>
                    
            </DropdownItem>
            <DropdownItem>Publish to web </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Document details</DropdownItem>
            <DropdownItem divider />
            <DropdownItem><i className="fas fa-print"></i>  print</DropdownItem>
            
        </DropdownMenu>
       
         </Dropdown>
       
    )
    
} 
export default FileMenu; 

  