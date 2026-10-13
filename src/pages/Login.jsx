import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    setError('')
    try {
      const res = await axios.post('https://dummyjson.com/auth/login', {
        username: data.username,
        password: data.password,
      })
      localStorage.setItem('token', res.data.accessToken)
      navigate('/profile')
    } catch {
      setError('Wrong username or password')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 w-80 border border-gray-300 rounded"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <div className="mb-3">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-400 px-2 py-1"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Min 3 characters' },
            })}
          />
          {errors.username && (
            <p className="text-red-600 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-400 px-2 py-1"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Min 6 characters' },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-1 hover:bg-green-700 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Login
