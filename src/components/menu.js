import React from 'react'
import EditFont from './menuItems/editFont'
import EditSize  from './menuItems/editSize'
import EditButton from './menuItems/editButton'
import EditForecolor from './menuItems/editForecolor'
import EditColor from './menuItems/editColor'
import EditFormatblock from './menuItems/editFormatblock'
import { ButtonGroup } from 'reactstrap';
import Underline from './menuItems/underline'


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
                <MenuBorder/>
                <EditSize/>
                <MenuBorder/>
                <ButtonGroup size="sm">
                     <EditButton cmd="bold" icon="fa fa-bold" />
                     <EditButton cmd="italic" icon="fa fa-italic" />
                     <Underline></Underline>
                     <EditColor cmd="forecolor" icon="fa fa-font"/>
                     <EditColor cmd="backcolor"icon="fa fa-pen"/>
                </ButtonGroup>
                <MenuBorder/>
                <EditFormatblock/>
            
            </div>
        </nav>
    )

}

const MenuBorder = () => (
    <div style={{ borderRightStyle: 'solid',
    borderRightWidth: 'thin',
    borderRightColor: 'gainsboro'
    }} ></div>
)


export default Menu;
