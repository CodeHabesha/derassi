import React from "react";
import { fontStyle } from '../../GLOBAL'


const EditSize = class EditSize extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {

        let size = e.target.value
        let selected = window.getSelection()
        let range = selected.getRangeAt(0)
        console.log(range, selected)
        for (let child of range.commonAncestorContainer.childNodes) {
            if (selected.containsNode(child) || child === selected.anchorNode.parentNode || child === selected.focusNode.parentNode) {
                child.style.fontSize = `${size}pt`
            }
        }
        //set the global font class 
        fontStyle.setSize(size)
    }
    render() {

        let values = this.props.values.map((val, i) => <option value={val.value} key={i}> {val.name} </option>)
        return (
            <div>
                <select defaultValue={fontStyle.currentSize} onChange={this.handleChange}>
                    {values}
                </select>
            </div>
        )
    }
}

export default EditSize;