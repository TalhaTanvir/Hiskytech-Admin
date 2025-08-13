import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Home({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 lg:ml-[173px]">
        <Navbar setSidebarOpen={setSidebarOpen}/>
        <main className="p-4 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

export default Home