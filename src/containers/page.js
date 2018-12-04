import { connect } from 'react-redux'
import { addText, updateVowel, deleteLast } from '../actions/index'
import Paragraph from '../components/paragraph';
import keyboardMap from '../keyboardMap'
import {isConsonant, formatDoc} from '../helpers'
import {fontStyle} from '../GLOBAL'
import { saveState } from './../actions'




function onKeyDown(e,dispatch){
      if (e.key === 'Tab') {
        e.preventDefault();
        formatDoc(dispatch, e.target, "insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
        return;
      }
}

let vowels = ""
let currentConsonant = ""


function keypressed(e, dispatch) {
  if(!e.key){
    return;
  }

  // if(e.key === 'Enter' ) {
  //   e.preventDefault()
  //   return;
  //   formatDoc(dispatch, e.target, "insertHTML", "<br/>");
  //   return;
  // }

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
        formatDoc(dispatch, e.target, "insertHTML", html);
      }else{
        let html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
        formatDoc(dispatch, e.target, "insertHTML", html);
      }
      currentConsonant = letter; //reset
    }else {
      vowels += letter
      let key = (currentConsonant + vowels).toLocaleLowerCase();
      let val = keyboardMap[key]
      if(val){
        // go back one and edit
        formatDoc(dispatch, e.target, "delete")
        if (isCaps){
          let html = `<span style="font-family: ${fontStyle.currentCapStyle}";>${keyboardMap[key]}</span>`
          formatDoc(dispatch, e.target, "insertHTML", html);

        }else{
          let html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
          formatDoc(dispatch, e.target, "insertHTML", html);
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
    onKeyDown: e => {
      return onKeyDown(e, dispatch)
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paragraph)
