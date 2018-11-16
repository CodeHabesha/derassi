import { connect } from 'react-redux'
import { addText, updateVowel, deleteLast } from '../actions/index'
import Paragraph from '../components/paragraph';
import keyboardMap from '../keyboardMap'
import {isConsonant} from '../helpers'
import {fontStyle} from '../GLOBAL'

// function isConsonant(letter) {
//   let c = /[a-bdf-hj-np-tv-wyz]/
//   return letter.match(c) !== null;
// }

function formatDoc(dispatch, oDoc, sCmd, sValue) {
  if(document) { document.execCommand(sCmd, false, sValue); oDoc.focus();}
}


var vowels = ""
var currentConsonant = ""


function keypressed(e, dispatch) {
  let oDoc = e.target
  console.log(oDoc)
  console.log("..key code ...")
  console.log(e.key)
  console.log(e.keyCode)
  if(e.key === 'Enter' ) {

    formatDoc(dispatch, oDoc, "insertHTML", "<br/>");
    return;
  }
  if(!e.key){
    return;
  }

  //  if(e.keyCode === 9 ) {
  //   // 4 space for tab
  //    e.stopPropagation();
  //    formatDoc("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
  //   return;
  // }

  var isCaps = e.getModifierState('CapsLock');
  console.log("is it caps")
  console.log(isCaps )
  var letter = e.key



  if (letter) {
    if (letter.match(/[^a-zA-z]/)) {
      return
    }

    e.preventDefault()

    var key = letter.toLowerCase()
    var consonant = isConsonant(key);
    if (consonant) {

      if (isCaps){
        var html = `<span style="font-family: ${fontStyle.currentCapStyle}";>${keyboardMap[key]}</span>`
        formatDoc(dispatch, oDoc, "insertHTML", html);


      }else{
        var html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
        formatDoc(dispatch, oDoc, "insertHTML", html);
      }


      currentConsonant = letter;
    }else {
      vowels += letter

      var key = (currentConsonant + vowels).toLocaleLowerCase();
      var val = keyboardMap[key]
      if(val){
        // go back one and edit
        formatDoc(dispatch, oDoc, "delete")
        if (isCaps){
          var html = `<span style="font-family: ${fontStyle.currentCapStyle}";>${keyboardMap[key]}</span>`
          formatDoc(dispatch, oDoc, "insertHTML", html);

        }else{
          var html = `<span style="font-family: ${fontStyle.currentStyle}";>${keyboardMap[key]}</span>`
          formatDoc(dispatch, oDoc, "insertHTML", html);
        }


      }
      return;
    }

    vowels = ""

  }



}
// let currentConsonant = ""
// let vowels = []
// let caps = false;
// const convertEnglishToAmharic = (dispatch, event ) => {
//
//   console.log(event.key)
//   let letter = event.key.toLowerCase();
//   if (letter) {
//
//     if (letter.match(/[^a-zA-z]/)) {
//       dispatch(addText(letter))
//       return;
//     }
//
//
//
//     let consonant = isConsonant(letter);
//     if (consonant) {
//       currentConsonant = letter;
//       caps = event.getModifierState('CapsLock')
//       console.log(caps)
//       vowels = []
//       dispatch(addText({char:  keyboardMap[letter], caps: caps}))
//
//     }else {
//       vowels.push(letter)
//       let keyboardCombo = currentConsonant + vowels.join("")
//       let vowel = keyboardMap[keyboardCombo]
//       if(vowel){
//         dispatch(updateVowel({char: vowel, caps: caps}))
//       }
//
//     }
//
//   }
// }



const mapStateToProps = (state)  => {
  console.log("state changed.......: ")
  console.log(state.text.abesha)
  return ({
    text: state.text.abesha
  })

}
const mapDispatchToProps = dispatch => {
  console.log(dispatch.getState)

  return ({
    onKeyPress: e  => {
       return keypressed(e, dispatch)
     }
  })

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paragraph)
