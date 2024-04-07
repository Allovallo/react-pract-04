import React, { Component } from 'react';

import Dropdown from 'components/Dropdown';
import './App.css';
import Counter from 'components/Counter';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import initialTodos from './todos.json';
import Form from 'components/Form';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

  // handleNameChange = event => {
  //   // console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <h1>Стан компонента</h1>
        <Form></Form>
        {/* <Counter initialValue={10}></Counter> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <div>
          <p>Загальна кількість todo'шек: {totalTodoCount}</p>
          <p>Кількість виконаних todo'шек: {completedTodosCount}</p>
        </div> */}

        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}

export default App;
