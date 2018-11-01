import text from './text'
import deepFreeze from 'deep-freeze'

describe('text reducer', () => {
  it('should handle initial state', () => {
    expect(
      text(undefined, {})
    ).toEqual({abesha: []})
  })

  it('should handle ADD_CHAR', () => {
    var obj = {abesha: []}
    deepFreeze(obj)
    expect(
      text(obj, {
        type: 'ADD_CHAR',
        char: "\u1200"
      })
    ).toEqual({ abesha:  ["\u1200"]})


    var obj = {abesha:  ["\u1208"]}
    deepFreeze(obj)
    expect(
      text(obj , {
        type: 'ADD_CHAR',
        char: "\u1200"
      })
    ).toEqual({ abesha:  ["\u1208", "\u1200" ]})





  })

  it('should handle UPDATE_VOWEL', () => {
      var obj = { abesha: ["\u1200", "\u1201"]}
      deepFreeze(obj);
      expect(

        text(obj, {
          type: 'UPDATE_VOWEL',
          char: "\u1202"
        })

      ).toEqual({abesha: ["\u1200","\u1202"]} )


  })

})
