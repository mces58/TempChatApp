import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputsError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    })

    if (!success) return

    setLoading(true)

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          userName: username,
          password,
          confirmPassword,
          gender,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      localStorage.setItem('chat-user', JSON.stringify(data))
      setAuthUser(data)
      toast.success(data.message)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { signUp, loading }
}

export default useSignup

function handleInputsError({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields')
    return false
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }

  return true
}
