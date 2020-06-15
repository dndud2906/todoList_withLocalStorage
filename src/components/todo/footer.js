import React from 'react'
import { useTodoContext } from './context'

function Footer() {
  const Filters = [
    {
      label: '전체',
      value: 'ALL',
    },
    {
      label: '해야할 일',
      value: 'TODO',
    },
    {
      label: '끝난 일',
      value: 'DONE',
    },
  ]

  const { filteredTodos, setFilter } = useTodoContext()
  return (
    <div>
      갯 수 : {filteredTodos.length}
      {Filters.map((filter, idx) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <button key={idx} onClick={() => setFilter(filter.value)}>
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

export default Footer
