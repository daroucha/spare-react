import api from './api'

export async function login({ email, password }) {
  const { data } = await api.post('/api/v1/auth/login', {
    email,
    password,
  })

  return data
}

export async function getCurrentUser() {
  const sessionToken = sessionStorage.getItem('token')

  if (!sessionToken) {
    return null
  }

  const { data } = await api.get('/api/v1/auth/me', {
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
  })

  return data
}
