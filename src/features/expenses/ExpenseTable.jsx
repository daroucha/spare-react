/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import {
  Table,
  Button,
  Checkbox,
  Badge,
} from 'flowbite-react'
import { DataContext } from './ExpenseDataContext'
import ExpenseAdd from './ExpenseAdd'

function ExpenseTable() {
  const { data, checked, query, setChecked } =
    useContext(DataContext)

  function handleCheck(e) {
    var updatedList = [...checked]

    if (e.target.checked) {
      updatedList = [...checked, e.target.value]
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1)
    }

    setChecked(updatedList)
  }

  function handleMultipleCheck(e) {
    const itemsArray = data.map((item) => item.id)
    setChecked(e.target.checked ? itemsArray : [])
  }

  const isChecked = (item) =>
    checked.includes(item)
      ? 'bg-spare-gray-100 text-spare-gray-15'
      : ''

  const filteredData = data?.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      item.id !== '_client'
  )

  return (
    <div>
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>
            <Checkbox onChange={handleMultipleCheck} />
          </Table.HeadCell>

          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Origin</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Current</Table.HeadCell>
          <Table.HeadCell>Installment</Table.HeadCell>

          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>

        <Table.Body>
          <ExpenseAdd />

          {filteredData?.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell className={isChecked(item.id)}>
                <Checkbox
                  value={item.id}
                  checked={checked.includes(item.id)}
                  onChange={handleCheck}
                />
              </Table.Cell>

              <Table.Cell
                className={`font-semibold text-spare-gray-100 ${isChecked(
                  item.id
                )}`}
              >
                {item.name}
              </Table.Cell>

              <Table.Cell className={isChecked(item.id)}>
                {item.amount}
              </Table.Cell>

              <Table.Cell className={isChecked(item.id)}>
                <Badge size="sm">
                  {item.category?.name}
                </Badge>
              </Table.Cell>

              <Table.Cell className={isChecked(item.id)}>
                {/* <Badge color="gray" size="sm">
                  {item.origin}
                </Badge> */}
              </Table.Cell>

              <Table.Cell className={isChecked(item.id)}>
                {item.type}
              </Table.Cell>

              <Table.Cell className={isChecked(item.id)}>
                {item.recurrence.status
                  ? item.recurrence.current
                  : '✕'}
              </Table.Cell>

              <Table.Cell className={isChecked(item.id)}>
                {item.recurrence.status
                  ? item.recurrence.total
                  : '✕'}
              </Table.Cell>

              <Table.Cell
                className={`text-end ${isChecked(item.id)}`}
              >
                <Button.Group>
                  <Button color="gray" size="sm">
                    <IconPencil size={16} />
                  </Button>

                  <Button color="gray" size="sm">
                    <IconTrash size={16} />
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ExpenseTable
