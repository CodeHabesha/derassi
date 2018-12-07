import React from "react";
import keyboardMap from '../keyboardMap'
import {isConsonant, formatDoc} from '../helpers'
import {fontStyle} from '../GLOBAL'
import Menu from './menu'
import Paragraph from './paragraph'

function onKeyDown(e, self){
      if (e.key === 'Tab') {
        e.preventDefault();
        formatDoc( e.target, "insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
        return;
      }

      if (e.key === 'Backspace') {
         console.log("...backespace....")
         console.log(self)
         //TODO: add logic to reassign focus and current paragraph when this paragraph is empty.
         // use e.targe.id to find the location on this.state
      }

      if(e.key === 'Enter' ) {
        e.preventDefault()
        formatDoc( e.target, "insertHTML", "<br/>");
        //console.log("entere hit")
        
        //TODO: add all logic to insert/append new paragraph when Enter is hit 
        self.setState({ paragraphs: [...self.state.paragraphs, self.state.paragraphs.length]});
        console.log(self)
        
        
        return;
      }
}



let vowels = ""
let currentConsonant = ""


function onKeyPress(e) {
  if(!e.key){
    return;
  }

   //console.log("..ke presed.>")
    //console.log(e)
  let isCaps = e.getModifierState('CapsLock');
  let letter = e.key

  if (letter) {
    if (letter.match(/[^a-zA-z]/)) { return }

    e.preventDefault()
    let key = letter.toLowerCase()
    let consonant = isConsonant(key);
    if (consonant) {

      if (isCaps){
        let html = `<span style="font-family: ${fontStyle.currentCapStyle}">${keyboardMap[key]}</span>`
        formatDoc( e.target, "insertHTML", html);
      }else{
        let html = `<span style="font-family: ${fontStyle.currentStyle}">${keyboardMap[key]}</span>`
        formatDoc(e.target, "insertHTML", html);
      }
      currentConsonant = letter; //reset
    }else {
      vowels += letter
      let key = (currentConsonant + vowels).toLocaleLowerCase();
      let val = keyboardMap[key]
      if(val){
        // go back one and edit
        formatDoc( e.target, "delete")
        if (isCaps){
          let html = `<span style="font-family: ${fontStyle.currentCapStyle}">${keyboardMap[key]}</span>`
          formatDoc( e.target, "insertHTML", html);

        }else{
          let html = `<span style="font-family: ${fontStyle.currentStyle}">${keyboardMap[key]}</span>`
          formatDoc(e.target, "insertHTML", html);
        }
      }
      return;
    }
    vowels = "" //reset
  }

}



class Page extends React.Component {
       
       constructor(props){
            super(props)
            this.state = {
              paragraphs: [0],

            }
          this.handleKeyDown = this.handleKeyDown.bind(this)
          this.handleOnChange = this.handleOnChange.bind(this)
       }

       handleKeyDown = (e) => onKeyDown(e, this)
       handleOnChange = (e) => {
         console.log("....changing....")
         console.log(e.target.id)
         console.log(e.target.innerHTML.toString().length)
       }

    render() {
      console.log("=================")
      console.log(this.state.paragraphs)
      // key is assigned by state's current element, which is a number, and that number is assigned as ref
      let paras = this.state.paragraphs.map( (el) => <Paragraph onChange={this.handleOnChange} id={el}  onKeyDown={this.handleKeyDown} onKeyPress={onKeyPress} key={el} /> )
         return(
           
             <div>

               <Menu/>
            
              <div className="page">
                  {paras}
              </div>


             </div>


         )
    }



}


export default Page;
