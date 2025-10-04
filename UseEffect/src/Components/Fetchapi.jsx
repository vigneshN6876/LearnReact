import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
    const [users , setUsers] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(null);
    
    const fetchUsers  = async () => {
       setLoading(true)
       try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok){
                throw new error("Network error")
            }
            const data = await response.json()
            setUsers(data)
       } catch (error) {
        setError(error)
       } finally {
        setLoading(false)
       }
    }
   useEffect(() => {
    fetchUsers()
   },[])
  return (
    <div>
        <h1>List of users</h1>
        <button onClick={fetchUsers} >click agin to fetch</button>
        {loading && <h1>Users are loading</h1>}
        {error && <h1>Error "{error}</h1>}
        <ul>
            {users.map((user) => (<li key={user.id}>{user.name} ({user.email})</li>) )}
        </ul>
    </div>
  )
}

export default Fetchapi