/* eslint-disable react/prop-types */
import { TextDisplayXs } from '../ui/TextDisplay'

function PageHeader({ title, children }) {
  return (
    <div className="flex justify-between items-center">
      <TextDisplayXs>{title}</TextDisplayXs>

      {children}
    </div>
  )
}

export default PageHeader
