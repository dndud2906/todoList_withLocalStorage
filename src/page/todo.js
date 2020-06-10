import React from 'react'
import Todo from '../components/todo'
import { TodoContextProvider } from '../components/todo/context'

function TodoPage() {
  return (
    <TodoContextProvider>
      <div>
        <Todo />
      </div>
    </TodoContextProvider>
  )
}

export default TodoPage
