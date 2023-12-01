/* eslint-disable no-unused-vars */
import {
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
} from '@tabler/icons-react'
import {
  Table,
  Button,
  Checkbox,
  Badge,
  TextInput,
} from 'flowbite-react'
import { TextDisplayXs } from '../ui/TextDisplay'
import { TextBodyMd } from '../ui/TextBody'
import { createContext, useContext, useState } from 'react'

const data = [
  {
    id: '6568bbabd1bc0fc2c9b5f49e',
    name: '🚗 Car Installment',
    amount: 1594.22,
    category: 'Investment',
    origin: 'Bill',
    type: 'Installment',
    current: 19,
    installment: 60,
  },
  {
    id: '6568be8c2a75dcf06dd9169f',
    name: '🚌 Transportation',
    amount: 607.8,
    category: 'Fixed',
    origin: 'PIX',
    type: 'Bill',
    current: '✕',
    installment: '✕',
  },
  {
    id: '65687be638a1de8d44ba8718',
    name: '🖥️ Mac Mini',
    amount: 541.62,
    category: 'Variable',
    origin: 'Credit',
    type: 'Installment',
    current: 3,
    installment: 12,
  },
]

const DataContext = createContext(null)

function DataFilters() {
  const { checked, query, setQuery } =
    useContext(DataContext)

  const checkedText =
    checked.length === 0 ? '' : `${checked.length} selected`

  return (
    <div className="flex justify-between items-center">
      <TextInput
        type="search"
        sizing="sm"
        placeholder="Search"
        icon={IconSearch}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <TextBodyMd>{checkedText}</TextBodyMd>
    </div>
  )
}

function DataTable() {
  const { checked, query, setChecked, setQuery } =
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

  const filteredData = data.filter((item) =>
    item.name.includes(query)
  )

  return (
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
        {filteredData.map((item) => (
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
              <Badge size="sm">{item.category}</Badge>
            </Table.Cell>

            <Table.Cell className={isChecked(item.id)}>
              <Badge color="gray" size="sm">
                {item.origin}
              </Badge>
            </Table.Cell>

            <Table.Cell className={isChecked(item.id)}>
              {item.type}
            </Table.Cell>

            <Table.Cell className={isChecked(item.id)}>
              {item.current}
            </Table.Cell>

            <Table.Cell className={isChecked(item.id)}>
              {item.installment}
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
  )
}

function PageHeader() {
  return (
    <div className="flex justify-between items-center">
      <TextDisplayXs>Expenses</TextDisplayXs>

      <Button size="md">
        <IconPlus size={16} className="mr-2" />
        Add expense
      </Button>
    </div>
  )
}

function Expenses() {
  const [checked, setChecked] = useState([])
  const [query, setQuery] = useState('')

  return (
    <DataContext.Provider
      value={{ checked, query, setChecked, setQuery }}
    >
      <div className="w-full px-8 py-4 flex flex-col space-y-4">
        <PageHeader />

        <DataFilters />

        <DataTable />
      </div>
    </DataContext.Provider>
  )
}

export default Expenses
