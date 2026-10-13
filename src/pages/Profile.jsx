import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
      return
    }

    axios
      .get('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem('token')
        navigate('/')
      })
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 border border-gray-300 rounded text-center">
        {user ? (
          <h1 className="text-2xl font-bold">Hello {user.firstName}</h1>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Profile
