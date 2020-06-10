import React, { useEffect } from 'react'

import Header from './header'
import Body from './body'
import Footer from './footer'
import { useTodoContext } from './context'

function Todo() {
  const { todos, setTodos, setId } = useTodoContext()
  useEffect(() => {
    const todoList = localStorage.getItem('todos')

    if ((todoList !== null) & (todoList !== '[]')) {
      const todosArr = JSON.parse(todoList)
      const LASTIdx = todosArr.length - 1
      setTodos(todosArr)
      setId(todosArr[LASTIdx].id + 1)
    } else {
      console.log('empty')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log('변화', todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Todo
