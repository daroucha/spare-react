/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useReducer, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import PageHeader from '../ui/PageHeader'
import { DataContext } from '../features/expenses/ExpenseDataContext'
import ExpenseAddButton from '../features/expenses/ExpenseAddButton'
import ExpenseFilters from '../features/expenses/ExpenseFilters'
import ExpenseTable from '../features/expenses/ExpenseTable'
import ExpenseDataReducer from '../features/expenses/ExpenseDataReducer'
import { getAllExpenses } from '../services/apiExpenses'

function Expenses() {
  const [checked, setChecked] = useState([])
  const [query, setQuery] = useState('')

  const [data, dispatch] = useReducer(
    ExpenseDataReducer,
    []
  )

  const {
    data: expenses,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['expenses'],
    queryFn: getAllExpenses,
  })

  useEffect(
    () =>
      dispatch({
        type: 'loaded',
        state: expenses,
      }),
    [expenses]
  )

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }

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
