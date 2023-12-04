import { useContext, useEffect, useState } from 'react'
import { IconPlus } from '@tabler/icons-react'
import { Button } from 'flowbite-react'
import { DataContext } from './ExpenseDataContext'

function ExpenseAddButton() {
  const { data, dispatch } = useContext(DataContext)

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const newRowCount = data.filter(
      (item) => item.id === '_client'
    ).length

    setDisabled(newRowCount > 0)
  }, [data])

  function handleAdd(e) {
    e.preventDefault()

    dispatch({
      type: 'added',
    })
  }

  return (
    <Button
      size="md"
      onClick={handleAdd}
      disabled={disabled}
    >
      <IconPlus size={16} className="mr-2" />
      Add expense
    </Button>
  )
}

export default ExpenseAddButton
