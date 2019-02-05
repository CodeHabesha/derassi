import React from 'react'
import EditFont from './menuItems/editFont'
import EditSize  from './menuItems/editSize'
import EditButton from './menuItems/editButton'
import EditForecolor from './menuItems/editForecolor'
import EditBackcolor from './menuItems/editBackcolor'
import EditFormatblock from './menuItems/editFormatblock'
import italic from '../icons/italic.gif'
import bold from '../icons/bold.gif'
import { Button, ButtonGroup } from 'reactstrap';


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
                    <Button outline color="secondary"> <EditButton cmd="italic" img={italic} /></Button>
                    <Button outline color="secondary"> <EditButton cmd="bold" img={bold} /></Button>
                </ButtonGroup>
                <EditFormatblock/>

            </div>
        </nav>
    )

}


export default Menu;
