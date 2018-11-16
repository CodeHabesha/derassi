import text from './text'
import deepFreeze from 'deep-freeze'

describe('text reducer', () => {
  it(' handles initial state', () => {
    expect(
      text(undefined, {})
    ).toEqual({body: []})
  })

  it(' handles to SAVE_STATE', () => {
    var obj = {body: [ "<h1> Hello </h1>" ]}
    deepFreeze(obj)
    expect(
      text(obj, {
        type: 'SAVE_STATE',
        html: "<h1> world </h1>"
      })
    ).toEqual({ body:  [ "<h1> Hello </h1>", "<h1> world </h1>"]})


    // var obj = {abesha:  ["\u1208"]}
    // deepFreeze(obj)
    // expect(
    //   text(obj , {
    //     type: 'ADD_CHAR',
    //     char: "\u1200"
    //   })
    // ).toEqual({ abesha:  ["\u1208", "\u1200" ]})





  })

  // it('should handle UPDATE_VOWEL', () => {
  //     var obj = { abesha: ["\u1200", "\u1201"]}
  //     deepFreeze(obj);
  //     expect(
  //
  //       text(obj, {
  //         type: 'UPDATE_VOWEL',
  //         char: "\u1202"
  //       })
  //
  //     ).toEqual({abesha: ["\u1200","\u1202"]} )
  //
  //
  // })

})
