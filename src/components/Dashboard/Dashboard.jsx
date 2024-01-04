import UserCard from './UserCard'
import CurrentUser from './CurrentUser'
function Dashboard() {
  return (
    <>
        <div className="flex flex-col h-dvh justify-start items-center p-10">
            <h1 className='text-6xl'>DASHBOARD</h1>
            <br />
            <div className="grid grid-cols-2 gap-4">
                <div className="col-start-1">
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