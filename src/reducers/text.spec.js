import text from './text'
import deepFreeze from 'deep-freeze'

describe('text reducer', () => {
  it('should handle initial state', () => {
    expect(
      text(undefined, {})
    ).toEqual({"abesha": [], "english": []})
  })

  it('should handle ADD_CHAR', () => {
    var obj = {english:[], abesha: []}
    deepFreeze(obj)
    expect(
      text(obj, {
        type: 'ADD_CHAR',
        object: {english: "h", abesha: "\u1200"}
      })
    ).toEqual({english: ["h"], abesha:  ["\u1200"]})


    var obj = {english: ["l"], abesha:  ["\u1208"]}
    deepFreeze(obj)
    expect(
      text(obj , {
        type: 'ADD_CHAR',
        object: {english: "h", abesha: "\u1200"}
      })
    ).toEqual({english: ["l", "h"], abesha:  ["\u1208", "\u1200" ]})





  })

  it('should handle UPDATE_VOWEL', () => {
      var obj = { english: ['h', 'e'], abesha: ["\u1200"]}
      deepFreeze(obj);
      expect(

        text(obj, {
          type: 'UPDATE_VOWEL',
          object: 'e'
        })

      ).toEqual({ english: ['h', 'e', 'e'], abesha: ["\u1202"] })


  })

})
