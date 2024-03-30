import './style.css'
import { MainForm } from "./mainForm"
import { TodoList } from './todoList'
import { useState, useEffect } from 'react'

export default function App(){
  const [todos, setTodos] = useState(() => {
    const deValue = localStorage.getItem("ITEMS")
    if(deValue === null) return []

    return JSON.parse(deValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  })

  function addItem(title){
    setTodos(currentTodos => {
      return[
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed:false }
      ]
    })
  }

  function toggleChecked(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return { ...todo, completed }
        }

        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return(
    <>
      <MainForm onSubmit={addItem} />
      <h1>ToDo List</h1>
      <TodoList todos={todos} toggleChecked={toggleChecked} deleteTodo={deleteTodo}/>
    </>
  )
}