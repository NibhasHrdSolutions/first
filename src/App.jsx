import { useState } from 'react'
import './App.css'
import Header from './dashboard_components/Header'
import Sidebar from './dashboard_components/Sidebar'
import Home from './dashboard_components/Home'
import Realtimepicker from './dashboard_components/Realtimepicker'



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
  <Realtimepicker/>

      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />

    </div>
  )
}

export default App
