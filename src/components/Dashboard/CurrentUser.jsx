import { Users } from "../UI/Common/Users";
import Card from '../UI/Common/Card/Card'

function CurrentUser() {
    const length = Users.length;
  return (
    <Card>
     <h1 className='text-black text-center text-2xl'>Hello</h1>
        <h1 className='text-black text-center text-3xl'>{Users[1].firstName} {Users[1].lastName}</h1>
    </Card>
  )
}

export default CurrentUser