import React from 'react'
import {GenericList, EditButton, FontList} from "./menuItems"
import italic from '../icons/italic.gif'
import bold from '../icons/bold.gif'
import hyperlink from '../icons/hyperlink.gif'
import fonts from './fontFamily'
import { fontStyle } from '../GLOBAL';

/**
 * Menu contains all menu items. 
 * It is a funcitonal React component 
 * @class Menu
 */
const Menu = () => {

    return(
        <div className="menu">
                    
                  <EditButton cmd="italic" img={italic} />
                  <EditButton cmd="bold" img={bold} />
                  <EditButton
                  cmd="createLink"
                  arg="https://github.com/codeHabesha/derassi"
                  name="hyperlink"
                  img={hyperlink}
                  />
                
                 <GenericList cmd="fontName"
                        setGlobal={ {should: true, case: 'fontStyle' } }
                        values= {
                            fonts.map( font => ({name:font, value:font}) )
                        } 
                        heading="Fonts"
                                
                 />

                    <GenericList cmd="fontSize"
                        setGlobal={ {should: true, case: 'fontSize' } }
                        values= {
                            [ 8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96 ].map( size => ({name:size, value:size}) )
                        } 
                        heading="Font size"
                                
                 />
                
                  <GenericList cmd="forecolor" 
                        values= { 
                          [
                            {name: "Black", value: "black"},
                            {name: "Red", value: "red"},
                            {name: "Yellow", value: "yellow"},
                            {name: "White", value: "white"}
                           ]
                          }
                        heading="Text Color"
                  />
                  
                       <GenericList cmd="backcolor" 
                        values= { 
                          [
                            {name: "Black", value: "black"},
                            {name: "Red", value: "red"},
                            {name: "Yellow", value: "yellow"},
                            {name: "White", value: "white"}
                           ]
                          }
                        heading="Background Color"
                  />
                  
                  <GenericList  cmd="formatBlock"
                        values = {
                            [
                                {name: "h1", value: "h1"},
                                {name: "h2", value: "h2"},
                                {name: "h3", value: "h3"},
                                {name: "h4", value: "h4"},
                                {name: "h5", value: "h5"},
                                {name: "h6", value: "h6"},
                            ]
                        } 
                        heading="Heading"
                  />

                  
                
        </div>
    )

}


export default Menu;
