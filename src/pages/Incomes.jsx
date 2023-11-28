import { IconPencil, IconTrash } from '@tabler/icons-react'
import { Table, Button, Checkbox } from 'flowbite-react'

import { TextDisplayXs } from '../ui/TextDisplay'

function DataTable() {
  const data = [
    {
      id: 0,
      name: 'Salary',
      amount: 6000,
      category: 'Job',
      origin: 'Job',
      type: '',
      current: '',
      installment: '',
    },
    {
      id: 1,
      name: 'Freela',
      amount: 6000,
      category: 'Job',
      origin: 'Job',
      type: '',
      current: '',
      installment: '',
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

function Incomes() {
  return (
    <div>
      <TextDisplayXs>Incomes</TextDisplayXs>

      <DataTable />
    </div>
  )
}

export default Incomes
