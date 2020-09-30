import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js';
import Button from './Button.js';
import styled from 'styled-components';
import TogglButton from './ToggleButton';
import TitleHeader from './TitleHeader.js';
import InputArea from './InputArea.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.timerRef = React.createRef();
  }

  incChild() {
    this.timerRef.current.retBtnText();
  }

  render() {
    return (
      <Root>
        <TitleHeader title='Diping' />
        <InputArea />
        <Button text='Done!' bgColor='#000'/>
        <Timer ref='timer'/>
        <Unit>
          <TogglButton bgColor='#ccc' handleClick={() => this.refs.timer.toggl()} />
          <Button text={this.refs.timer} bgColor='#4169e1' handleClick={() => this.refs.timer.toggl()} />
          <Button text='reset' bgColor='#808080' handleClick={() => this.refs.timer.reset()} />
        </Unit>
      </Root>
    );
  }
}

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
