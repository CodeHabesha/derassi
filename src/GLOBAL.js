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

export const currentTitle = {
    setCurrent: (title) => {
        currentTitle.title = title
    },
    title: "untitled"
}


