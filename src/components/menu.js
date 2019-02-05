import React from 'react'
import GenericList from './menuItems/genericList'
import EditFont from './menuItems/editFont'
import EditSize  from './menuItems/editSize'
import EditButton from './menuItems/editButton'
import fonts from './fontFamily'
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


            <EditFont cmd="fontName"
                setGlobal={{ should: true, case: 'fontStyle' }}
                values={
                    fonts.map(font => ({ name: font, value: font }))
                }
                heading="Fonts"
            />

            <EditSize cmd="fontSize"
                values={
                    [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map(size => ({ name: size, value: size }))
                }
                heading="Font size"

            />

            <GenericList cmd="forecolor"
                values={
                    [
                        { name: "Black", value: "black" },
                        { name: "Red", value: "red" },
                        { name: "Yellow", value: "yellow" },
                        { name: "White", value: "white" }
                    ]
                }
                heading="Text Color"
            />

            <GenericList cmd="backcolor"
                values={
                    [
                        { name: "Black", value: "black" },
                        { name: "Red", value: "red" },
                        { name: "Yellow", value: "yellow" },
                        { name: "White", value: "white" }
                    ]
                }
                heading="Background Color"
            />

            <GenericList cmd="formatBlock"
                values={
                    [
                        { name: "h1", value: "h1" },
                        { name: "h2", value: "h2" },
                        { name: "h3", value: "h3" },
                        { name: "h4", value: "h4" },
                        { name: "h5", value: "h5" },
                        { name: "h6", value: "h6" },
                    ]
                }
                heading="Heading"
            />

            <EditButton cmd="italic" img={italic} />
            <EditButton cmd="bold" img={bold} />
        </nav>
    )

}


export default Menu;
