import keyboardMap from '../keyboardMap'
import React from 'react'
const  fonts = [
    
     'Abesha Arada', 
     'Abesha Arif',
     'Abesha Demeke',
     'Abesha Kitfo',
     'Abesha Lemma', 
     'Abesha Lemma Light', 
     'Abesha Tana'
]





const getAmharicName = (index) => {
    switch (index) {
        case 0:
            return (keyboardMap['ua'] + keyboardMap['be'] + keyboardMap['sxa'] + " " + keyboardMap['ua'] + keyboardMap['ra'] + keyboardMap['da'])
        case 1:
            return (keyboardMap['ua'] + keyboardMap['be'] + keyboardMap['sxa'] + " " + keyboardMap['ua'] + keyboardMap['ree'] + keyboardMap['f'])
        case 2:
            return (keyboardMap['ua'] + keyboardMap['be'] + keyboardMap['sxa'] + " " + keyboardMap['de'] + keyboardMap['me'] + keyboardMap['qe'])
        case 3:
            return (keyboardMap['ua'] + keyboardMap['be'] + keyboardMap['sxa'] + " " + keyboardMap['k'] + keyboardMap['t'] + keyboardMap['fo'])
        case 4:
            return (keyboardMap['ua'] + keyboardMap['be'] + keyboardMap['sxa'] + " " + keyboardMap['le'] + keyboardMap['ma'])
        case 5:
            return (keyboardMap['ua'] + keyboardMap['be'] + keyboardMap['sxa'] + " " + keyboardMap['le'] + keyboardMap['ma'] + " " + keyboardMap['qe'])
        case 6:
            return (keyboardMap['ua'] + keyboardMap['be'] + keyboardMap['sxa'] + " " + keyboardMap['tca'] + keyboardMap['na'])
        default:
            break;
    }
}
const AbeshaNameFamily = (props) => (
    <span style={{fontFamily: props.fontFamily}}> {props.name} </span>
)


export default  fonts;
export const fontsInAmharic = fonts.map( (_font, i) => getAmharicName(i))
export const getFamily = (i)=> <AbeshaNameFamily name={getAmharicName(i)} fontFamily={fonts[i]}/> 