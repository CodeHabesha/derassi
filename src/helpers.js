import { saveState } from "./actions"

export const isConsonant = (letter)  => {
  let  c = /[a-bdf-hj-np-tv-wyz]/
  return letter.match(c) !== null;
}

export const  formatDoc = (dispatch, oDoc, sCmd, sValue)  => {
  if(document) {
    document.execCommand(sCmd, false, sValue); oDoc.focus();
    //Now save the state
    dispatch(saveState(oDoc.innerHTML));

  }
}
