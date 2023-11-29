/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function isBold(bold) {
  return bold ? 'font-bold' : 'font-normal'
}

export function TextTitleXs({ bold, children }) {
  return (
    <span
      className={`text-sm ${isBold(
        bold
      )} text-spare-gray-90 dark:text-white`}
    >
      {children}
    </span>
  )
}

export function TextTitleSm({ bold, children }) {
  return (
    <span
      className={`text-base ${isBold(
        bold
      )} text-spare-gray-90 dark:text-white`}
    >
      {children}
    </span>
  )
}

export function TextTitleMd({ bold, children }) {
  return (
    <span
      className={`text-lg ${isBold(
        bold
      )} text-spare-gray-90 dark:text-white`}
    >
      {children}
    </span>
  )
}

export function TextTitleLg({ bold, children }) {
  return (
    <span
      className={`text-xl ${isBold(
        bold
      )} text-spare-gray-90 dark:text-white`}
    >
      {children}
    </span>
  )
}
