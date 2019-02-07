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
            
            <div className="row" style={{maxHeight: 40}}>
                <div style={{width: 20}}></div>
                <EditButton cmd="undo" icon="fa fa-undo" />
                <EditButton cmd="redo" icon="fa fa-redo" />
                <MenuBorder/>
                <EditButton cmd="print" icon="fa fa-print"/>
                <MenuBorder/>
                <EditFont/>
                <MenuBorder/>
                <EditSize/>
                <MenuBorder/>
                <EditFormatblock/>
                <MenuBorder/>
                <ButtonGroup size="sm">
                     <EditButton cmd="bold" icon="fa fa-bold" />
                     <EditButton cmd="italic" icon="fa fa-italic" />
                     <Underline></Underline>
                     <EditColor cmd="forecolor" icon="fa fa-font"/>
                     <EditColor cmd="backcolor"icon="fa fa-pen"/>
                </ButtonGroup>
                <MenuBorder/>
                <EditButton cmd="justifyCenter" icon="fa fa-align-center" />
                <EditButton cmd="justifyLeft" icon="fa fa-align-left" />
                <EditButton cmd="justifyRight" icon="fa fa-align-right" />
                <EditButton cmd="justifyFull" icon="fa fa-align-justify" />
                <MenuBorder/>
            </div>
        </nav>
    )

}

const MenuBorder = () => (
    <div style={{ borderRightStyle: 'solid',
    borderRightWidth: 'thin',
    borderRightColor: 'gainsboro',
    }} ></div>
)


export default Menu;
