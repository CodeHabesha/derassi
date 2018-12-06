import React from 'react'
import {List, EditButton, FontList} from "./menuItems"
import italic from '../icons/italic.gif'
import bold from '../icons/bold.gif'
import hyperlink from '../icons/hyperlink.gif'
import fonts from './fontFamily'


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
                 <FontList cmd="fontName" fonts={fonts} heading= "Fonts"  />
                  <List cmd="backcolor" 
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
                  <List  cmd="formatBlock"
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
