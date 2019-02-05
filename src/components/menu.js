import React from 'react'
import EditFont from './menuItems/editFont'
import EditSize  from './menuItems/editSize'
import EditButton from './menuItems/editButton'
import EditForecolor from './menuItems/editForecolor'
import EditBackcolor from './menuItems/editBackcolor'
import EditFormatblock from './menuItems/editFormatblock'
import italic from '../icons/italic.gif'
import bold from '../icons/bold.gif'


/**
 * Menu contains all menu items. 
 * It is a funcitonal React component 
 * @class Menu
 */
const Menu = () => {

    return (
        <nav className="navbar sticky-top navbar-light bg-light">
            <EditFont/>
            <EditSize/>
            <EditForecolor/>
            <EditBackcolor/>
            <EditFormatblock/>
            <EditButton cmd="italic" img={italic} />
            <EditButton cmd="bold" img={bold} />
        </nav>
    )

}


export default Menu;
