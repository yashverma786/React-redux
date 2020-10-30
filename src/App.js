import React from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <h1>REDUX-TODOAPP</h1>
      <AddTodo></AddTodo>
      <List></List>
    </div>
  );
}

export default App;
