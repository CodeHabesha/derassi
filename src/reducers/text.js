

const text = (state = { body: []}, action) => {
  switch (action.type) {
    case 'SAVE_STATE':
      return {
                   body:  [...state.body,  action.html]
              }
    default:
      return state
  }
}

export default text
