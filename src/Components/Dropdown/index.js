import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';
import styles from './style.css';

class Dropdown extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen
    };
  }

  toggle() {
    let isOpen = !this.state.isOpen;
    this.setState({isOpen: isOpen});
  }

  close() {
    this.setState({isOpen: false});
  }

  render() {
    const { items, title } = this.props;

    console.log(typeof items);
    return (
      <div className={styles.dropdown}>
        <div className={styles.dropdownTitle} onClick={() => this.toggle()}>
          { title }
          <span className={this.state.isOpen ? styles.arrowDown : styles.arrowUp}></span>
        </div>
        {
          this.state.isOpen && 
            <div className={styles.dropdownBody}>
              <div className={styles.crossIconWrapper}>
                <div className={styles.crossIcon} onClick={() => this.close()}></div>
              </div>
              {
                  typeof items == 'object' && items.map((dropdownItem, index) => {
                    return <DropdownItem item={dropdownItem} key={index} />;
                  })
              }
              {
                  typeof items == 'string' &&
                    <div>{items}</div>
              }
            </div>
        } 
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  items: PropTypes.isRequired,
  isOpen: PropTypes.bool
};

export default Dropdown;
