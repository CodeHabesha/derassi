import { connect } from 'react-redux'
import { addText, updateVowel } from '../actions/index'
import Paragraph from '../components/paragraph';
import keyboardMap from '../keyboardMap'
import {isConsonant} from '../helpers'

// function isConsonant(letter) {
//   var c = /[a-bdf-hj-np-tv-wyz]/
//   return letter.match(c) !== null;
// }



const convertEnglishToAmharic = (dispatch, letter ) => {
  if (letter) {
     if (letter.match(/[^a-zA-z]/)) {
        var obj = {english: letter, abesha: letter}
        dispatch(addText(obj))
      }

    var consonant = isConsonant(letter);
    if (consonant) {
      var obj = {english: letter, abesha: keyboardMap[letter]}
      dispatch(addText(obj)) 
    }else {
        dispatch(updateVowel(letter))
    } 
    
  }
}

const mapStateToProps = (state)  =>  ({
  text: state.text.abesha.join("")
})

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
