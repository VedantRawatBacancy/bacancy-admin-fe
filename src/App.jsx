
import { useState } from 'react'
import SidebarNav from './components/UI/SidebarNav/SidebarNav'
import { SidebarItems } from './components/UI/SidebarNav/SidebarItems'
import MainContent from './components/UI/MainContent/MainContent';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  const [selectedId, setSelectedId] = useState(1); // Initial selected item

  const onItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <>
    <Router>
      <div className="flex">
      <SidebarNav items={SidebarItems} selected={selectedId} onItemClick={onItemClick} />
      <AppRoutes />
    </div>
    </Router>
    </>
  )
}

export default App
