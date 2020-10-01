import React from 'react';
import styled from 'styled-components';


class InputArea extends React.Component {
  constructor() {
    super();
    this.state = {text:''}
  }

  onChange(e) {
    //const { onChange } = this.props;
    //onChange({text: e.target.value});
    this.setState({text: e.target.value});
  }

  getText(){
    return this.state.text;
  }

  render() {
    return (
      <Area onChange={e => this.onChange(e)}>
      </ Area>
    );
  }
}

export default InputArea;

const Area = styled.textarea`
  width: 60%;
  height: 300px;
  padding: 5px;
  margin: 2%;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 24px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`