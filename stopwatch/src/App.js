import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js';
import Button from './Button.js';
import styled from 'styled-components';
import TogglButton from './ToggleButton';
import TitleHeader from './TitleHeader.js';
import InputArea from './InputArea.js';
import MainText from './MainText';

class App extends Component {
  constructor(props) {
    super(props);
    this.timerRef = React.createRef();
    this.state = {text: '', visible: 'none'};
  }

  incChild() {
    this.timerRef.current.retBtnText();
  }

  getChildState(fnc) {
    const childState = fnc();
    this.setState({text: childState});
  }

  onChange(value) {
    this.setState({text: value});
  }
  render() {
    return (
      <Root>
        <TitleHeader title='Diping' />
        <InputArea onChange={value => this.onChange(value)} ref='input'/>
        <Button 
          text='Done!' 
          bgColor='#000' 
          handleClick={() => this.getChildState(() => this.refs.input.getText())}
        />
        <MainText text={this.state.text} ref='main' visble={this.state.visible}/>
        
      </Root>
    );
  }
}

/*
<Timer ref='timer'/>
        <Unit>
          <TogglButton bgColor='#ccc' handleClick={() => this.refs.timer.toggl()} />
          <Button text={this.refs.timer} bgColor='#4169e1' handleClick={() => this.refs.timer.toggl()} />
          <Button text='reset' bgColor='#808080' handleClick={() => this.refs.timer.reset()} />
        </Unit>

*/

export default App;
const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const Title = styled.h1`
  color: #333;
`

const Unit = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`
