/* eslint-disable react/prop-types */
import { Alert } from 'flowbite-react'
import {
  IconAlertOctagonFilled,
  IconCircleCheckFilled,
} from '@tabler/icons-react'

function FormAlert({ type, message, dismiss }) {
  if (message) {
    return (
      <Alert
        color={type}
        icon={
          type === 'failure'
            ? IconAlertOctagonFilled
            : IconCircleCheckFilled
        }
        onDismiss={dismiss}
      >
        {message}
      </Alert>
    )
  }
}

export default FormAlert
