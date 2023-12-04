/* eslint-disable react/prop-types */
import { useReducer, useState } from 'react'
import PageHeader from '../ui/PageHeader'
import { DataContext } from '../features/expenses/ExpenseDataContext'
import ExpenseAddButton from '../features/expenses/ExpenseAddButton'
import ExpenseFilters from '../features/expenses/ExpenseFilters'
import ExpenseTable from '../features/expenses/ExpenseTable'
import ExpenseDataReducer from '../features/expenses/ExpenseDataReducer'

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

function Expenses() {
  const [checked, setChecked] = useState([])
  const [query, setQuery] = useState('')

  const [data, dispatch] = useReducer(
    ExpenseDataReducer,
    fetched
  )

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
        <PageHeader title="Expenses">
          <ExpenseAddButton />
        </PageHeader>

        <ExpenseFilters />

        <ExpenseTable />
      </div>
    </DataContext.Provider>
  )
}

export default Expenses
