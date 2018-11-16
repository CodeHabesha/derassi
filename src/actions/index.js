
export const addText = (char,caps) => ({
  type: 'ADD_CHAR',
  char,
  caps
})

export const updateVowel = (char, caps) => ({
  type:'UPDATE_VOWEL',
  char,
  caps
})


export const deleteLast = (arr)  => ({
  type:'DELETE_LAST',
  arr
})
