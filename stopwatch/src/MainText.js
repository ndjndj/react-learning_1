import React from 'react';
import styled from 'styled-components';

class MainText extends React.Component {
  constructor() {
    super();
    this.state = {text: 'TEST SENTENSE', visible: 'none'}
  }

  isVisible(){
    //let isVisible = this.state.text.length ? 'flex' : 'none';
    let isVisible = 'flex';
    this.setState({text: this.props.text,visible: isVisible});
  }

  setText(text){
    this.setState({text: text});
  }

  convertText(text) {
    let retText = text.replace(/\n/g, '<br>');
    return retText;
  }

  render() {
    return(
      <Main>
        {this.convertText(this.props.text)}
      </Main>
    );
  }
}

export default MainText;

const Main = styled.div`
  margin: 1%;
  display: 'flex';
`