import React from 'react';
import Button from './Button.js';

class TogglButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isTogglOn: true};
  }

  handleClick(fnc) {
    fnc();
    this.setState({isTogglOn: !this.state.isTogglOn});
  }

  render() {
    return(
      <Button 
        text={this.state.isTogglOn ? 'ON' : 'OFF'} 
        bgColor={this.props.bgColor} 
        handleClick={() => this.handleClick(() => this.props.handleClick())} 
      />
    );
  }
}

export default TogglButton;