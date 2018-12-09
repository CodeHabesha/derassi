export const fontStyle =  {

    setFont:   (font) => { 
        fontStyle.currentStyle = font; fontStyle.currentCapStyle = font + " Caps"
    },
    setSize: (size ) => {
        fontStyle.currentSize = size ;
    },
    currentStyle:  'Abesha Lemma',
    currentCapStyle: 'Abesha Lemma Caps',
    currentSize: 12
   
}
