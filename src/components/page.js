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

      if(e.key === 'Enter' ) {
        e.preventDefault()
        formatDoc( e.target, "insertHTML", "<br/>");
        console.log("entere hit")
        console.log(self.state)
        self.setState({ paragraphs: [...self.state.paragraphs, 0]});
        
        
        return;
      }
}



let vowels = ""
let currentConsonant = ""


function onKeyPress(e) {
  if(!e.key){
    return;
  }

   console.log("..ke presed.>")
    console.log(e)
  let isCaps = e.getModifierState('CapsLock');
  let letter = e.key

  if (letter) {
    if (letter.match(/[^a-zA-z]/)) { return }

    e.preventDefault()
    let key = letter.toLowerCase()
    let consonant = isConsonant(key);
    if (consonant) {

      if (isCaps){
        let html = `<span style="font-family: ${fontStyle.currentCapStyle}";>${keyboardMap[key]}</span>`
        formatDoc( e.target, "insertHTML", html);
      }else{
        let html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
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
          let html = `<span style="font-family: ${fontStyle.currentCapStyle}";>${keyboardMap[key]}</span>`
          formatDoc( e.target, "insertHTML", html);

        }else{
          let html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
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
       }

       handleKeyDown = (e) => onKeyDown(e, this)

    render() {
      console.log("alkjasdkfjaksldj")
      console.log(typeof this.state.paragraphs)
      let paras = this.state.paragraphs.map( (e,i) => <Paragraph onKeyDown={this.handleKeyDown} onKeyPress={onKeyPress} key={i} /> )
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
