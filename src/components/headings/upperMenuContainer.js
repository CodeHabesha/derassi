import React from 'react'
import { Navbar, Nav, NavItem} from 'reactstrap'
import FileMenu from './upperMenus/fileMenu'
import EditMenu from './upperMenus/editMenu'
import ViewMenu from './upperMenus/viewMenu'
import FormatMenu from './upperMenus/formatMenu'
import HelpMenu from './upperMenus/helpMenu'
import ToolsMenu from './upperMenus/toolsMenu'
import InsertMenu from './upperMenus/insertMenu'

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