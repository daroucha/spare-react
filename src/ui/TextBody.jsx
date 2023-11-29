/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function isBold(bold) {
  return bold ? 'font-bold' : 'font-normal'
}

export function TextBodyXs({ bold, children }) {
  return (
    <span
      className={`text-xs ${isBold(
        bold
      )} text-spare-gray-60 dark:text-white`}
    >
      {children}
    </span>
  )
}

export function TextBodySm({ bold, children }) {
  return (
    <span
      className={`text-sm ${isBold(
        bold
      )} text-spare-gray-60 dark:text-white`}
    >
      {children}
    </span>
  )
}

export function TextBodyMd({ bold, children }) {
  return (
    <span
      className={`text-base ${isBold(
        bold
      )} text-spare-gray-60 dark:text-white`}
    >
      {children}
    </span>
  )
}

export function TextBodyLg({ bold, children }) {
  return (
    <span
      className={`text-lg ${isBold(
        bold
      )} text-spare-gray-60 dark:text-white`}
    >
      {children}
    </span>
  )
}
