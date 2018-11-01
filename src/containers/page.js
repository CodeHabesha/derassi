import { connect } from 'react-redux'
import { addText, updateVowel } from '../actions/index'
import Paragraph from '../components/paragraph';
import keyboardMap from '../keyboardMap'
import {isConsonant} from '../helpers'

// function isConsonant(letter) {
//   var c = /[a-bdf-hj-np-tv-wyz]/
//   return letter.match(c) !== null;
// }

var currentConsonant = ""
var vowels = []

const convertEnglishToAmharic = (dispatch, letter ) => {
  if (letter) {
     if (letter.match(/[^a-zA-z]/)) {
        dispatch(addText(letter))
      }

     var consonant = isConsonant(letter);
     if (consonant) {
        currentConsonant = letter;
        vowels = [] 
        dispatch(addText(keyboardMap[letter]))
            
      }else {
           vowels.push(letter)
           var keyboardCombo = currentConsonant + vowels.join("")
           var vowel = keyboardMap[keyboardCombo]
           if(vowel){
              dispatch(updateVowel(vowel))
           }
          
      } 
    
  }
}

const mapStateToProps = (state)  => {
  console.log(state.text)
  return ({
    text: state.text.abesha.join("")
  })
  
} 
const mapDispatchToProps = dispatch => {
console.log(dispatch.getState)
return ({
  onKeyPress: e  =>  convertEnglishToAmharic(dispatch, e.key)
})

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paragraph)
