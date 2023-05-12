import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo.js';
import Todo from './components/Todo.js'
import axios from 'axios'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [todosData,settodosData] = useState()

  function openAddTodoModal(){
    setShowModal(true)
  }

  function closeAddTodoModal(){
    setShowModal(false)
  }

  
  async function getTodos() {
    try {
      const response = await axios.get('http://localhost:3001/getAllTodoCards');
      // console.log(response);
      settodosData(response.data.todos)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getTodos()
  },[])
  
  if (!todosData) {
    return <h1>Loading</h1>
  }
  
  const todoCards = todosData.map((item) => {
    return(
      <Todo
        key = {item._id}
        name = {item.name}
        comment = {item.comment}
        date = {item.date.slice(0,10)}
      />
    )
  })

  return (
    <div className="app">
      <div className="app-head">
        <h1 className='app-title'>All Todos</h1>
        <button className='add-todo-btn' onClick={openAddTodoModal}>Add Todo</button>
      </div>
      <div className="main">
        {todoCards}
      </div>
      {showModal && 
        <AddTodo
          close={closeAddTodoModal}
        />}
    </div>
  );
}

export default App;
