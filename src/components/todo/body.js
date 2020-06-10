import React from 'react'
import { useTodoContext } from './context'

function Body() {
  const { todos, setTodos, filteredTodos } = useTodoContext()

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleUpdateStatus = (todo) => {
    const updatedTodo = { ...todo, isDone: !todo.isDone }

    const updatedTodos = todos.map((mapTodo) => {
      let arr = {}
      if (mapTodo === todo) {
        mapTodo = updatedTodo
        arr = mapTodo
      } else {
        arr = mapTodo
      }
      return arr
    })
    setTodos(updatedTodos)
  }
  return (
    <div>
      {filteredTodos.map((todo) => {
        const { id, title, isDone } = todo

        return (
          <div key={id}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => handleUpdateStatus(todo)}
            />
            <span>{title}</span>
            <button onClick={() => handleDeleteTodo(id)}>삭제</button>
          </div>
        )
      })}
    </div>
  )
}

export default Body
