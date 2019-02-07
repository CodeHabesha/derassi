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

    style={ borderBottomStyle: 'solid',
    borderBottomWidth: 'thin',
    borderBottomColor: 'gainsboro',
    maxHeight: 30

    }

    render = () => (
    <Navbar color="light"  style={this.style} >
        <Nav>

          <NavItem>
            <FileMenu/>
          </NavItem> 

          <NavItem>
            <EditMenu/>
          </NavItem>

          <NavItem>
            <ViewMenu/>
          </NavItem> 

           <NavItem>
            <InsertMenu/>
          </NavItem>

          <NavItem>
            <FormatMenu/>
          </NavItem> 

        
          <NavItem>
            <ToolsMenu/>
          </NavItem>
   
          <NavItem>
            <HelpMenu/>
          </NavItem>

        </Nav>
        
     </Navbar>
    )
}

export default TextMenu; 