import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import UserManagement from "../components/Admin/UserManagement/UserManagement";
import MainContent from "../components/UI/MainContent/MainContent";


function ProtectedRoutes() {
    return(
        <Routes>
            <Route index element={<MainContent renderComp={<Dashboard />} />} path='/dash' />
            <Route element={<MainContent renderComp={<UserManagement />} />} path='/user-management' />
        </Routes>
    )
}

export default ProtectedRoutes