import toast from 'react-hot-toast'
import api from './api'

const sessionToken = sessionStorage.getItem('token')

export async function getAllExpenses() {
  const { data: response } = await api
    .get('/api/v1/expenses', {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    })
    .catch((err) => toast(err.message))

  return response.data
}
