import React from 'react'
import EditFont from './menuItems/editFont'
import EditSize  from './menuItems/editSize'
import EditButton from './menuItems/editButton'
import EditColor from './menuItems/editColor'
import { Navbar } from 'reactstrap';
import Underline from './menuItems/underline'
import EditHeading from './menuItems/editHeading';
import ToggleEnglishMenu from './menuItems/toggleEnglishMenu'
import ToggleEnglishBody from './menuItems/toggleEnglishBody'


/**
 * Menu contains all menu items. 
 * It is a funcitonal React component 
 * @class Menu
 */
const Menu = (props) => {

    return (
        <Navbar color="light"  >
            
            <div className="row" style={{maxHeight: 40}}>

                <div style={{width: 20}}></div>
                <EditButton cmd="undo" icon="fa fa-undo"/>
                <EditButton cmd="redo" icon="fa fa-redo"/>

                <MenuBorder/>

                <EditButton cmd="print" icon="fa fa-print"/>

                <MenuBorder/>

                <ToggleEnglishMenu onMenuToggle={props.onMenuToggle}/>

                <MenuBorder/>

                <ToggleEnglishBody onBodyToggle={props.onBodyToggle} />

                <MenuBorder/>


                <EditFont abeshaMenu={props.abeshaMenu}/>

                <MenuBorder/>

                <EditSize/>

                <MenuBorder/>

                <EditHeading abeshaMenu={props.abeshaMenu} />

                <MenuBorder/>

                <EditButton cmd="bold" icon="fa fa-bold"/>
                <EditButton cmd="italic" icon="fa fa-italic"/>
                <EditButton cmd="underline" icon="fa fa-underline"/>
                <EditButton cmd="strikeThrough" icon="fa fa-strikethrough"/>
                <EditColor cmd="forecolor" icon="fa fa-font"/>
                <EditColor cmd="backcolor"icon="fa fa-highlighter"/>

                <MenuBorder/>
                  
                {/* TODO: need form input to insert src links, they may need
                thier own component*/}
                <EditButton cmd="insertLink" icon="fa fa-link"/>
                <EditButton cmd="insertImage" icon="fa fa-image"/>


                <MenuBorder/>

                <EditButton cmd="justifyCenter" icon="fa fa-align-center"/>
                <EditButton cmd="justifyLeft" icon="fa fa-align-left"/>
                <EditButton cmd="justifyRight" icon="fa fa-align-right"/>
                <EditButton cmd="justifyFull" icon="fa fa-align-justify"/>

                <MenuBorder/>

                <EditButton cmd="insertOrderedList" icon="fa fa-list-ol"/>
                <EditButton cmd="insertUnorderedList" icon="fa fa-list-ul"/>
                <EditButton cmd="indent" icon="fa fa-indent"/>
                <EditButton cmd="outdent" icon="fa fa-outdent"/>


            </div>
        </Navbar>
    )

}

const MenuBorder = () => (
    <div style={{ borderRightStyle: 'solid',
    borderRightWidth: 'thin',
    borderRightColor: 'gainsboro',
    }} ></div>
)


export default Menu;
