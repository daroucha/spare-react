import { useContext } from 'react'
import { DataContext } from './ExpenseDataContext'
import { Table, TextInput, Button } from 'flowbite-react'
import { IconCheck, IconX } from '@tabler/icons-react'

function ExpenseAdd() {
  const { data, dispatch } = useContext(DataContext)

  const addedRow = data.filter(
    (item) => item.id === '_client'
  )

  if (!addedRow || addedRow.length === 0) {
    return
  }

  function handleChangeData(inputed) {
    dispatch({
      type: 'changed',
      state: inputed,
    })
  }

  function handleSave() {
    dispatch({
      type: 'changed',
      state: addedRow.map((item) => (item.id = 109)),
    })
  }

  function handleDismiss() {
    dispatch({
      type: 'deleted',
      id: '_client',
    })
  }

  return (
    <>
      {addedRow.map((item) => (
        <Table.Row
          key={item.id}
          className="shadow-stroke-focus"
        >
          <Table.Cell></Table.Cell>

          <Table.Cell>
            <TextInput
              autoFocus
              placeholder="Name"
              sizing="sm"
              value={item.name}
              onChange={(e) =>
                handleChangeData({
                  ...item,
                  name: e.target.value,
                })
              }
            />
          </Table.Cell>

          <Table.Cell>
            <TextInput
              placeholder="Amount"
              sizing="sm"
              value={item.amount}
              onChange={(e) =>
                handleChangeData({
                  ...item,
                  amount: e.target.value,
                })
              }
            />
          </Table.Cell>

          <Table.Cell>
            <TextInput
              placeholder="Category"
              sizing="sm"
              value={item.category}
              onChange={(e) =>
                handleChangeData({
                  ...item,
                  category: e.target.value,
                })
              }
            />
          </Table.Cell>

          <Table.Cell>
            <TextInput
              placeholder="Origin"
              sizing="sm"
              value={item.origin}
              onChange={(e) =>
                handleChangeData({
                  ...item,
                  origin: e.target.value,
                })
              }
            />
          </Table.Cell>

          <Table.Cell>
            <TextInput
              placeholder="Type"
              sizing="sm"
              value={item.type}
              onChange={(e) =>
                handleChangeData({
                  ...item,
                  type: e.target.value,
                })
              }
            />
          </Table.Cell>

          <Table.Cell>
            <TextInput
              placeholder="Current"
              sizing="sm"
              value={item.current}
              onChange={(e) =>
                handleChangeData({
                  ...item,
                  current: e.target.value,
                })
              }
            />
          </Table.Cell>

          <Table.Cell>
            <TextInput
              placeholder="Installment"
              sizing="sm"
              value={item.installment}
              onChange={(e) =>
                handleChangeData({
                  ...item,
                  installment: e.target.value,
                })
              }
            />
          </Table.Cell>

          <Table.Cell className="text-end">
            <Button.Group>
              <Button
                color="gray"
                size="sm"
                onClick={handleSave}
              >
                <IconCheck
                  size={16}
                  className="text-spare-primary"
                />
              </Button>

              <Button
                color="gray"
                size="sm"
                onClick={handleDismiss}
              >
                <IconX size={16} />
              </Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  )
}

export default ExpenseAdd
