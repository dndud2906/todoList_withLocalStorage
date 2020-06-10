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
    case '전체': {
      return todos
    }
    case '해야할 일': {
      return todos.filter((todo) => !todo.isDone)
    }
    case '끝난 일': {
      return todos.filter((todo) => todo.isDone)
    }
    default: {
      return todos
    }
  }
}
