import React from 'react';

class TodoElement extends React.Component {
  render() {
    const {element: {id}} = this.props;
    return(
      <span>{this.props.element.content}</span>
    );
  }
}

export default TodoElement;