import React from 'react'

const ListAndCondition = () => {
    const users = [
        {name : "John", online : true},
        {name : "Doe", online : false},
        {name : "Smith", online : true},
        {name : "Jack", online : false},
    ]
  return (
    <div>
        <h1>List and Conditional Rendering</h1>
        <ul>
            {users.map((user , index) => (user.online ? <li key={index} >{user.name} is online</li> : null ))}
        </ul>
    </div>
  )
}

export default ListAndCondition