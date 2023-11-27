import { Table, Button, Checkbox } from 'flowbite-react'

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
      id: 0,
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
          <Table.Row key={item}>
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
                <Button color="gray">A</Button>
                <Button color="gray">B</Button>
                <Button color="gray">C</Button>
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
      <h1>Incomes</h1>

      <DataTable />
    </div>
  )
}

export default Incomes
