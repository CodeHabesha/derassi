import keyboardMap from '../keyboardMap'
import {isConsonant, formatDoc} from '../helpers'
import {fontStyle} from '../GLOBAL'

let vowels = ""
let currentConsonant = ""


const  onKeyPress = (e)  => {
  if(!e.key){
    return;
  }

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
        //document.execCommand("insertHTML", false, html); e.target.focus();
      }else{
        let html = `<span style="font-family: ${fontStyle.currentStyle}">${keyboardMap[key]}</span>`
        formatDoc(e.target, "insertHTML", html);
        //document.execCommand("insertHTML", false, html); e.target.focus();
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

export default onKeyPress; 
