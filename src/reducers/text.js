import {isConsonant} from '../helpers'
import keyboardMap from '../keyboardMap'

const text = (state = {english: [], abesha: []}, action) => {
  switch (action.type) {
    case 'ADD_CHAR':
      return {
                   english: [...state.english, action.object.english] ,
                   abesha:  [...state.abesha,  action.object.abesha]
              }
    case 'UPDATE_VOWEL':
        {
          var len = state.english.length
          var index = len - 1; 
          var vowels = ""
          console.log(state.abesha)
          console.log(state.english)
      
          while(len > 0 && !isConsonant(state.english[index]) ) {
                vowels += state.english[index]
                len--; 
          }
          var consonant = state.english[len]
          var updated = consonant + vowels
          var i = state.abesha.length - 1

          if(keyboardMap[updated]){
            return {
              english: [...state.english, action.object] ,
              abesha:  [...state.abesha.slice(0,i),  keyboardMap[updated]]
            }
          }else{
            return {
              english: [...state.english, action.object] ,
              abesha:  [...state.abesha]
            }
          }


        }
    default:
      return state
  }
}

export default text
