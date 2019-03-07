import React from 'react'
import { fontStyle }  from '../../GLOBAL'
const CapAbesha = (props) => (
    <span>
    <span style={{fontFamily: fontStyle.menuFontCapStyle ? fontStyle.menuFontCapStyle : fontStyle.menuFontStyle}}>{props.meaning.slice(0,1)}</span>
    <span style={{fontFamily: fontStyle.menuFontStyle}}>{props.meaning.slice(1)}</span>
    </span>
) 


export default CapAbesha; 
