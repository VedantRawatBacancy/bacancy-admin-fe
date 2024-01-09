import UserCard from './UserCard'
import CurrentUser from './CurrentUser'
function Dashboard() {
  return (
    <>
        <div className="flex flex-col h-dvh justify-start items-center p-10">
        <div className='text-4xl text-center text-orange-700 w-full p-3 rounded-md'>
            <h1>DASHBOARD</h1>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-4">
                <div className="col-start-1 ">
                    <CurrentUser />
                </div>
                <div className="col-start-2">
                    <UserCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard