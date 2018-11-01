

const text = (state = { abesha: []}, action) => {
  switch (action.type) {
    case 'ADD_CHAR':
      return {
                   abesha:  [...state.abesha,  action.char]
              }
    case 'UPDATE_VOWEL':
        {      
                 console.log(state.abesha)
              return {
                   abesha: [...state.abesha.slice(0, state.abesha.length - 1) , action.char]
              }
        }
    default:
      return state
  }
}

export default text
