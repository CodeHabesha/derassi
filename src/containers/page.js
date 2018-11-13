import { connect } from 'react-redux'
import { addText, updateVowel, deleteAWord } from '../actions/index'
import Paragraph from '../components/paragraph';
import keyboardMap from '../keyboardMap'
import {isConsonant} from '../helpers'

// function isConsonant(letter) {
//   let c = /[a-bdf-hj-np-tv-wyz]/
//   return letter.match(c) !== null;
// }

let currentConsonant = ""
let vowels = []

const convertEnglishToAmharic = (dispatch, event ) => {

   console.log(event.key)
   if(event.getModifierState('CapsLock')){
     console.log(
       "caps lock "
     )
   }else {
     console.log('not caps ')
   }
  let letter = event.key.toLowerCase(); 
  if (letter) {

     if(letter.onChange)
     if (letter.match(/[^a-zA-z]/)) {
        dispatch(addText(letter))
      }

     let consonant = isConsonant(letter);
     if (consonant) {
        currentConsonant = letter;
        console.log(event.getModifierState('CapsLock'))
        vowels = [] 
        dispatch(addText(keyboardMap[letter]))
            
      }else {
           vowels.push(letter)
           let keyboardCombo = currentConsonant + vowels.join("")
           let vowel = keyboardMap[keyboardCombo]
           if(vowel){
              dispatch(updateVowel(vowel))
           }
          
      } 
    
  }
}


//source: 
//https://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity/3866442#3866442
const setEndOfContenteditable = (contentEditableElement) =>
{
    let range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
  }

const mapStateToProps = (state)  => {
  console.log(
    "lakjdklfjaklsjfklasjdfklajsdfxxxxx"
  )
  console.log(state.text)
  return ({
    text: state.text.abesha
  })
  
} 
const mapDispatchToProps = dispatch => {
console.log(dispatch.getState)

return ({
  onKeyPress: e  => { 
    e.preventDefault()
    setEndOfContenteditable(e.target)
    return convertEnglishToAmharic(dispatch, e)
  
  },
  onChange : e => {
    console.log(e)
    if(e.inputType === "deleteContentBackward"){
        let alive = Object.values(e.target.childNodes).map( m => m.innerHTML)
        console.log(e.target.childNodes.length)
        console.log(alive)
      
       // let list = e.target.childNodes
       // list.removeChild(list.childNodes[list.length - 1]); 
         dispatch(deleteAWord())
    }

  }
}
)

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paragraph)
