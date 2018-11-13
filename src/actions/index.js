
export const addText = char => ({
  type: 'ADD_CHAR',
  char 
})

export const updateVowel = char => ({
  type:'UPDATE_VOWEL',
  char
})


export const deleteAWord = (arr) => ({
  type:'UPDATE_WITH_NEW',
  arr
})
