

const text = (state = { paragraphs: [] , body: []}, action) => {
  switch (action.type) {
    case 'SAVE_STATE':
      return {
                   body:  [...state.body,  action.html]
              }
    case 'ADD_PARAGRAPH':
       return {
                  paragraphs: [...state.paragraph, action.paragraph]
       }

    default:
      return state
  }
}

export default text
