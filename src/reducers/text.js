

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
    case 'DELETE_LAST':
        {
          
          console.log(".....deleting a world.....")
          console.log(state.abesha)
            return { abesha: [...state.abesha.slice(0, state.abesha.length - 1)] }
            // don't return anyting just fix this new value 
           
        }
      
    default:
      return state
  }
}

export default text
