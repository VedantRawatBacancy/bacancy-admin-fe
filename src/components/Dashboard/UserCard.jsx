import React from 'react'
import Card from '../UI/Common/Card/Card'

import { Users } from '../UI/Common/Users'

function UserCard() {
    const length = Users.length;
  return (
    <Card>
     <h1 className='text-black text-center text-2xl'>Total Number of Users</h1>
        <h1 className='text-black text-center text-5xl'>{length}</h1>
    </Card>
  )
}

export default UserCard