import React from "react";
import { fontStyle } from '../../../GLOBAL'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const EditSize = class EditSize extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          currentsize: fontStyle.currentSize
        };
        this.handleChange = this.handleChange.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    
    handleChange(e) {

        let size = e.target.value
        let selected = window.getSelection()
        let range = selected.getRangeAt(0)
        for (let child of range.commonAncestorContainer.childNodes) {
            if (selected.containsNode(child) || child === selected.anchorNode.parentNode || child === selected.focusNode.parentNode) {
                child.style.fontSize = `${size}pt`
            }
        }
        //set the global font class 
        fontStyle.setSize(size)
        this.setState({currentsize: size})
    }
    render() {
        
       let sizes = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96]
        
        let values = sizes.map((size, i) => <DropdownItem onClick={this.handleChange} value={size} key={i}> {size} </DropdownItem>)
        return (
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="form-control" color="gainsboro" caret>
                   {this.state.currentsize}
                </DropdownToggle>
                <DropdownMenu>
                    {values}
                </DropdownMenu>
                </Dropdown>
        )
    }
}

export default EditSize;


