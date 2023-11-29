/* eslint-disable react/prop-types */
export function TextBodyXs({ children }) {
  return (
    <span className="text-xs font-regular text-spare-gray-60 dark:text-white">
      {children}
    </span>
  )
}

export function TextBodySm({ children }) {
  return (
    <span className="text-sm font-regular text-spare-gray-60 dark:text-white">
      {children}
    </span>
  )
}
