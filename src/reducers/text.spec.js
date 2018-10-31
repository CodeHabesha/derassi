import text from './text'

describe('text reducer', () => {
  it('should handle initial state', () => {
    expect(
      text(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TEXT', () => {
    expect(
      text([], {
        type: 'ADD_TEXT',
        char: 'a'
      })
    ).toEqual(['a'])

    expect(
      text(['a', 'b', 'c'] , {
        type: 'ADD_TEXT',
        char: 'd'
      })
    ).toEqual(['a','b','c', 'd'])

  })

})
