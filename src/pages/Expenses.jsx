import {
  IconPencil,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react'
import { Table, Button, Checkbox } from 'flowbite-react'
import { TextDisplayXs } from '../ui/TextDisplay'

function DataTable() {
  const data = [
    {
      id: 0,
      name: 'Car Installment',
      amount: 1594.22,
      category: 'Investment',
      origin: 'Bill',
      type: 'Installment',
      current: 19,
      installment: 60,
    },
    {
      id: 1,
      name: 'Transportation',
      amount: 607.8,
      category: 'Fixed',
      origin: 'PIX',
      type: 'Bill',
      current: null,
      installment: null,
    },
    {
      id: 2,
      name: 'Mac Mini',
      amount: 541.62,
      category: 'Variable',
      origin: 'Credit',
      type: 'Installment',
      current: 3,
      installment: 12,
    },
  ]

  return (
    <Table striped hoverable>
      <Table.Head>
        <Table.HeadCell>
          <Checkbox />
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
        {data.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>

            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.amount}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>{item.origin}</Table.Cell>
            <Table.Cell>{item.type}</Table.Cell>
            <Table.Cell>{item.current}</Table.Cell>
            <Table.Cell>{item.installment}</Table.Cell>

            <Table.Cell>
              <Button.Group>
                <Button color="gray">
                  <IconPencil size={16} />
                </Button>

                <Button color="gray">
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
  return (
    <div className="w-full px-8 py-4 flex flex-col space-y-4">
      <PageHeader />

      <DataTable />
    </div>
  )
}

export default Expenses
