import Button from "../../UI/Common/Button/Button"
import { useReactTable } from "@tanstack/react-table"
import {Users} from "../../UI/Common/Users"
import UsersTable from "./UserTable"

function UserManagement() {

const createUser = () => {
    console.log("Function Create User Works")
    console.log(table)
}
const manageUsers = () => {
    console.log("Function Manage Users Works")
}

  return (
    <>
        <div className="flex flex-col h-dvh justify-start items-center p-10">
        <div className='text-4xl text-center text-orange-700 w-full p-3 rounded-md'>
            <h1>User Management</h1>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-4">
                <div className="col-start-1 ">
                    <Button name={"Create User"} buttonColor={'border-orange-700 bg-orange-700 text-white'} functionCall={createUser}/>
                </div>
                <div className="col-start-2 ">
                    <Button name={"Manage Users"} buttonColor={'border-orange-700 text-orange-700'} functionCall={manageUsers}/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <UsersTable users={Users} />
            </div>
        </div>
    </>
  )
}

export default UserManagement