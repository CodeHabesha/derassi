import React from 'react'
import { Navbar, Nav, NavItem} from 'reactstrap'
import FileMenu from './textMenus/fileMenu'
import EditMenu from './textMenus/editMenu'
import ViewMenu from './textMenus/viewMenu'
import FormatMenu from './textMenus/formatMenu'
import HelpMenu from './textMenus/helpMenu'
import ToolsMenu from './textMenus/toolsMenu'
import InsertMenu from './textMenus/insertMenu'

class TextMenu extends  React.Component {

    constructor(props){
      super(props)
    }
    style={
       maxHeight: 'auto'
    }

    render = () => (
    <Navbar color="light"  style={this.style} >
        <Nav>

          <NavItem>
            <FileMenu abeshaMenu={this.props.abeshaMenu}/>
          </NavItem> 

          <NavItem>
            <EditMenu abeshaMenu={this.props.abeshaMenu}/>
          </NavItem>

          <NavItem>
            <ViewMenu abeshaMenu={this.props.abeshaMenu}/>
          </NavItem> 

           <NavItem>
            <InsertMenu abeshaMenu={this.props.abeshaMenu}/>
          </NavItem>

          <NavItem>
            <FormatMenu abeshaMenu={this.props.abeshaMenu}/>
          </NavItem> 

        
          <NavItem>
            <ToolsMenu abeshaMenu={this.props.abeshaMenu}/>
          </NavItem>
   
          <NavItem>
            <HelpMenu abeshaMenu={this.props.abeshaMenu}/>
          </NavItem>

        </Nav>
        
     </Navbar>
    )
}

export default TextMenu; 