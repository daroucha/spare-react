import { useContext } from 'react'
import { DataContext } from './ExpenseDataContext'
import { TextInput } from 'flowbite-react'
import { IconSearch } from '@tabler/icons-react'
import { TextBodyMd } from '../../ui/TextBody'

function ExpenseFilters() {
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

export default ExpenseFilters
