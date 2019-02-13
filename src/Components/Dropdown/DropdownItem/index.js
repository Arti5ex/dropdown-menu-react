import React, { Component } from 'react';
import './style.css';

class DropdownItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item: this.props.item
    };
  }

  render() { 
    return (
      <div className="dropdown-item">
        {this.state.item}
      </div>
    );
  }
}

export default DropdownItem;
