export const isConsonant = (letter)  => {
    var c = /[a-bdf-hj-np-tv-wyz]/
    return letter.match(c) !== null;
  }
  