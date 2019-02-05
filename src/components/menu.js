import React from 'react'
import EditFont from './menuItems/editFont'
import EditSize  from './menuItems/editSize'
import EditButton from './menuItems/editButton'
import EditForecolor from './menuItems/editForecolor'
import EditBackcolor from './menuItems/editBackcolor'
import EditFormatblock from './menuItems/editFormatblock'
import { ButtonGroup } from 'reactstrap';


/**
 * Menu contains all menu items. 
 * It is a funcitonal React component 
 * @class Menu
 */
const Menu = () => {

    return (
        <nav className="navbar sticky-top navbar-light bg-light">
          
            <div className="row">
                
                <EditFont/>
                <EditSize/>
                <EditForecolor/>
                <EditBackcolor/>
                <ButtonGroup>
                     <EditButton cmd="italic" icon="fa fa-italic" />
                     <EditButton cmd="bold" icon="fa fa-bold" />
                </ButtonGroup>
                <EditFormatblock/>
            
            </div>
        </nav>
    )

}


export default Menu;
