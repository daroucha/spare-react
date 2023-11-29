/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function TextLink({ to, children }) {
  return (
    <Link
      className="inline-block shrink-0 grow-0 w-auto font-medium text-base text-spare-primary hover:underline"
      to={to}
    >
      {children}
    </Link>
  )
}

export default TextLink
