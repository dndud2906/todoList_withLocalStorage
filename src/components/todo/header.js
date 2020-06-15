import React, { useState } from 'react'
import styled from 'styled-components'
import { useTodoContext } from './context'

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid black;
  box-sizing: border-box;
`

function Header() {
  const [text, setText] = useState('')
  const { todos, setTodos, id, setId } = useTodoContext()

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleEnter = (e) => {
    if (text && e.keyCode === 13) {
      const todo = { id: id, title: text, isDone: false }
      setTodos([...todos, todo])
      setId(id + 1)
      setText('')
    }
  }

  return (
    <div>
      <Input
        placeholder="할 일을 적으세요."
        value={text}
        onChange={handleText}
        onKeyDown={handleEnter}
      />
    </div>
  )
}

export default Header
