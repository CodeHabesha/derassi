import keyboardMap from '../keyboardMap'
import {isConsonant, formatDoc} from '../helpers'
import {fontStyle, abeshaToggle} from '../GLOBAL'

let vowels = ""
let currentConsonant = ""


const  onKeyPress = (e, self)  => {
  
  if(!abeshaToggle.current){
    return;
  }

  if( !e.key){
    return;
  }
  
  // prevent from creating letters after space is pressed
  if(e.key === " "){
      vowels = ""
      currentConsonant = ""
      return; 
  }
  // prevent from creating letters after space is pressed
  if(e.key === "Enter"){
    e.preventDefault();
    vowels = ""
    currentConsonant = ""
    document.execCommand('insertParagraph',false); 
    return; 
  }
  
  if(e.getModifierState('Tab')){
    e.preventDefault();
    formatDoc( e.target, "insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    return;
  }

  let isCaps = e.getModifierState('CapsLock');
  let letter = e.key

  if (letter) {
    
    // return if number or none letter
   if (letter.match(/[^a-zA-z]/)) { return }

   e.preventDefault()
    let key = letter.toLowerCase()
    let consonant = isConsonant(key);
    if (consonant) {
      if (isCaps){
        formatDoc( e.target, "insertHTML", getSpan(isCaps, key));
        //document.execCommand("insertHTML", false, html); e.target.focus();
      }else{
        formatDoc(e.target, "insertHTML", getSpan(isCaps, key));
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
          formatDoc( e.target, "insertHTML", getSpan(isCaps,key));

        }else{
          formatDoc(e.target, "insertHTML", getSpan(isCaps, key));
        }
      }
      return;
    }
    vowels = "" //reset
  }

}

export default onKeyPress; 



const getSpan = (isCaps, key) => {
  let span = document.createElement('span')
      span.style.fontSize = fontStyle.currentSize + 'pt' 
  if (isCaps){
    span.style.fontFamily = fontStyle.currentCapStyle
    //return `<span  style="font-family: ${fontStyle.currentCapStyle}; font-size=${fontStyle.currentSize}pt">${keyboardMap[key]}</span>`
  }else{
    span.style.fontFamily = fontStyle.currentStyle
    //return  `<span style="font-family: ${fontStyle.currentStyle};font-size=${fontStyle.currentSize}pt">${keyboardMap[key]}</span>`
  }
   let text = document.createTextNode(keyboardMap[key])
   span.appendChild(text)
   return span.outerHTML
}