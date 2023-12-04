/* eslint-disable no-unused-vars */
import {
  IconCheck,
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
  IconX,
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
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

const fetched = [
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

function dataReducer(state, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...state,
        {
          id: '_client',
          name: '',
          amount: 0,
          category: '',
          origin: '',
          type: '',
          current: 0,
          installment: 0,
        },
      ]
    }

    case 'changed': {
      return state.map((item) => {
        if (item.id === action.state.id) {
          return action.state
        } else {
          return item
        }
      })
    }

    case 'deleted': {
      return state.filter((item) => item.id !== action.id)
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

function PageAddButton() {
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

function PageHeader() {
  return (
    <div className="flex justify-between items-center">
      <TextDisplayXs>Expenses</TextDisplayXs>

      <PageAddButton />
    </div>
  )
}

function DataAdd() {
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

  const filteredData = data.filter(
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
          <DataAdd />

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
    </div>
  )
}

function Expenses() {
  const [checked, setChecked] = useState([])
  const [query, setQuery] = useState('')

  const [data, dispatch] = useReducer(dataReducer, fetched)

  return (
    <DataContext.Provider
      value={{
        data,
        checked,
        query,
        dispatch,
        setChecked,
        setQuery,
      }}
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
