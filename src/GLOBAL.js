export const fontStyle =  {

    setFont:   (font) => { 
        console.log("....font sent")
        console.log(font)
        console.log(this)
        fontStyle.currentStyle = font; fontStyle.currentCapStyle = font + " Caps"
    },
    currentStyle:  'Abesha Lemma',
    currentCapStyle: 'Abesha Lemma Caps'
   
}
