import api from './api'

export async function login({ email, password }) {
  const response = await api.post('/api/v1/auth/login', {
    email,
    password,
  })

  return response
}
