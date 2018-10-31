
const text = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return [
        ...state, action.char
      ]
    default:
      return state
  }
}

export default text
