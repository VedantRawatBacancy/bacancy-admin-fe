
import { useState } from 'react'
import SidebarNav from './components/UI/SidebarNav/SidebarNav'
import { SidebarItems } from './components/UI/SidebarNav/SidebarItems'
import MainContent from './components/UI/MainContent/MainContent';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  const [selectedId, setSelectedId] = useState(1); // Initial selected item

  const onItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <div className="flex">
      <SidebarNav items={SidebarItems} selected={selectedId} onItemClick={onItemClick} />
      <MainContent>
        <Dashboard />
      </MainContent>
    </div>
    </>
  )
}

export default App
