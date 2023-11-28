/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function TextLink({ to, children }) {
  return (
    <Link
      className="inline-block shrink-0 grow-0 w-auto font-medium text-sm text-cyan-900"
      to={to}
    >
      {children}
    </Link>
  )
}
