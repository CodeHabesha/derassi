import keyboardMap from './keyboardMap'
export const fontStyle =  {

    setFont:   (font) => { 
        fontStyle.currentStyle = font; fontStyle.currentCapStyle = font + " Caps"
    },
    setSize: (size ) => {
        fontStyle.currentSize = size ;
    },
    currentStyle:  'Abesha Lemma',
    currentCapStyle: 'Abesha Lemma Caps',
    currentSize: 12,
    menuFontStyle: 'Abesha Lemma'
    
}


export const abeshaToggle = {
    setCurrent: () => {
        abeshaToggle.current = !abeshaToggle.current
    },
    current: true
}


export const currentTitle = {
    setCurrent: (title) => {
        currentTitle.title = title
    },
    title: (abeshaToggle.current ? (keyboardMap['ua'] + keyboardMap['r'] + keyboardMap['u'] + keyboardMap['s'] + keyboardMap['t']) : "untitled")
}



