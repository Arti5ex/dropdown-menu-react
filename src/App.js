import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dropdownTitle: 'Fruits menu',
      dropdownItems: ['apple', 'house', 'guitar', 'ship'],
      isOpen: true
    };
  }

  render() {
    const {dropdownTitle, dropdownItems, isOpen} = this.state;

    return (
      <div className="App">
        <Dropdown title={dropdownTitle} items={dropdownItems} isOpen={isOpen}/>
      </div>
    );
  }
}

export default App;
