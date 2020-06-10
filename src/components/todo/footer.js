import React from 'react'
import { useTodoContext } from './context'

function Footer() {
  const { filteredTodos, setFilter } = useTodoContext()
  return (
    <div>
      갯 수 : {filteredTodos.length}
      <button onClick={() => setFilter('전체')}>전체</button>
      <button onClick={() => setFilter('해야할 일')}>해야할 일</button>
      <button onClick={() => setFilter('끝난 일')}>끝난 일</button>
    </div>
  )
}

export default Footer
