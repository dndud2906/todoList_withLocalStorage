import React, { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

export function TodoContextProvider({ children }) {
  const [id, setId] = useState(0)
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filter, setFilter] = useState('전체')

  useEffect(() => {
    const storage = localStorage.getItem('todos')
    const todoList = JSON.parse(storage)

    setTodos(storage ? todoList : [])

    setId(
      todoList === null
        ? 0
        : todoList.length > 0
        ? todoList[todoList.length - 1].id + 1
        : 0,
    )
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log('변화', todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    setFilteredTodos(mapToFilter(todos, filter))
  }, [todos, filter])

  return (
    <Context.Provider
      value={{ todos, setTodos, id, setId, filteredTodos, setFilter }}
    >
      {children}
    </Context.Provider>
  )
}

export function useTodoContext() {
  return useContext(Context)
}

TodoContextProvider.propTypes = {
  children: PropTypes.element,
}

function mapToFilter(todos, filter) {
  switch (filter) {
    case 'ALL': {
      return todos
    }
    case 'TODO': {
      return todos.filter((todo) => !todo.isDone)
    }
    case 'DONE': {
      return todos.filter((todo) => todo.isDone)
    }
    default: {
      return todos
    }
  }
}
