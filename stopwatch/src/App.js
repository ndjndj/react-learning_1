import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js';
import Button from './Button.js';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Root>
        <Title>React StopWatch</Title>
        <Timer ref='timer'/>
        <Unit>
          <Button text='start' bgColor='#4169e1' handleClick={() => this.refs.timer.start()} />
          <Button text='stop' bgColor='#dc143c' handleClick={() => this.refs.timer.stop()} />
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
