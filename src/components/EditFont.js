import React from "react";
import { fontStyle }  from '../GLOBAL';


class EditFont extends React.Component {
  constructor(props) {
    super(props);

    this.options = this.props.list.map((listItem) => {
      if (typeof listItem !== 'object') {
        return { name: listItem, value: listItem };
      }
      return { name: listItem.name, value: listItem.value };
    });


    this.onChangeFn = (event) => {
      // fontStyle[fontProperty] = event.currentTarget.value;
      this.props.systemFont[this.props.fontProperty] = event.currentTarget.value;
    }
  }


  render() {
    return (
      <select value={this.props.value} onChange={this.onChangeFn}>
        {this.options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    )
  }
}


export default EditFont;
