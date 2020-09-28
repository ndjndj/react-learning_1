import React from 'react';
import TodoElement from './TodoElement.js';
import AddTodo from './AddTodo.js';

class InputForm extends React.Component {
  constructor(){
    super();
    this.state = {
      value: '',
      todoList: [],
    };
  }

  onChange(keyvalue) {
    this.setState(keyvalue);
  }

  add(todoElement) {
    this.setState({
      todoList: this.state.todoList.concat(todoElement),
      value: "",
    });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>TODO App</h1>
        <AddTodo
          {...this.state}
          onChange={keyvalue => this.onChange(keyvalue)}
          add={todoElement => this.add(todoElement)}
        />
        <ul>
          {todoList.map(
            element => (
              <TodoElement
                key={element.id}
                element={element.content}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default InputForm;