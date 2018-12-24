//import { saveState } from "./actions"

export const isConsonant = (letter)  => {
  let  c = /[a-bdf-hj-np-tv-wyz]/
  return letter.match(c) !== null;
}

export const  formatDoc = ( oDoc, sCmd, sValue)  => {
  if(document) {
    document.execCommand(sCmd, false, sValue); oDoc.focus();

  }
}


export const findLastTextNode =  (node) => {
  if (node.nodeType === Node.TEXT_NODE) return node;
  let children = node.childNodes;
  for (let i = children.length-1; i>=0; i--) {
    let textNode = findLastTextNode(children[i]);
    if (textNode !== null) return textNode;
  }
  return null;
}

export  const replaceCaret = (el /*:HTMLElement*/)  => {
  
  // Place the caret at the end of the element
  const target = findLastTextNode(el);
  console.log("found targe, ", target)
  // do not move caret if element was not focused
  //const isTargetFocused = document.activeElement === target;
  
  if (target/*&& target.nodeValue !== null && isTargetFocused */) {
    let range = document.createRange();
    let sel = window.getSelection();
    

    //let html = target.innerHTML
    

    //TODO: figur out how to find the right legth of innnerHTML to replace 0 in setStart(targe, 0)
     //while(html.length && html.childNodes){
      //console.log(html)
      range.setStart(target, target.length); 
      range.setEnd(target, target.length)
    //}
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    if (el instanceof HTMLElement) el.focus();
  }
}

