import { connect } from 'react-redux'
import { addText, updateVowel, deleteLast } from '../actions/index'
import Paragraph from '../components/paragraph';
import keyboardMap from '../keyboardMap'
import {isConsonant, formatDoc} from '../helpers'
import {fontStyle} from '../GLOBAL'
import { saveState } from './../actions'


function handleChange(e, dispatch){
    let oDoc = e.target
    console.log("handle change")
    console.log(e)
    dispatch(saveState(oDoc.innerHTML))
}

let vowels = ""
let currentConsonant = ""


function keypressed(e, dispatch) {
  if(!e.key){
    return;
  }
  let oDoc = e.target
  if(e.key === 'Enter' ) {
    formatDoc(dispatch, oDoc, "insertHTML", "<br/>");
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
        let html = `<span style="font-family: ${fontStyle.currentCapStyle}";>${keyboardMap[key]}</span>`
        formatDoc(dispatch, oDoc, "insertHTML", html);
      }else{
        let html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
        formatDoc(dispatch, oDoc, "insertHTML", html);
      }
      currentConsonant = letter; //reset
    }else {
      vowels += letter
      let key = (currentConsonant + vowels).toLocaleLowerCase();
      let val = keyboardMap[key]
      if(val){
        // go back one and edit
        formatDoc(dispatch, oDoc, "delete")
        if (isCaps){
          let html = `<span style="font-family: ${fontStyle.currentCapStyle}";>${keyboardMap[key]}</span>`
          formatDoc(dispatch, oDoc, "insertHTML", html);

        }else{
          let html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
          formatDoc(dispatch, oDoc, "insertHTML", html);
        }
      }
      return;
    }
    vowels = "" //reset
  }

}

const mapStateToProps = (state)  => {
  console.log(state)
  return ({
    text: state.text.abesha
  })
}
const mapDispatchToProps = dispatch => {
  return ({
    onKeyPress: e  => {
      return keypressed(e, dispatch)
    },
    onChange: e => {
      return handleChange(e, dispatch)
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paragraph)
