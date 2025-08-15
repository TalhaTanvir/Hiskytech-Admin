import React from 'react'
import { Link } from 'react-router-dom';


function Dashboard() {
  const stats = [
    { id: 1, title: "Messages", value: 2, description: "Unread or recent messages", path: "/messages" },
    { id: 2, title: "News", value: 2, description: "Published news articles", path: "/news" },
    { id: 3, title: "Pricing Packages", value: 3, description: "Active pricing plans", path: "/prices" },
    { id: 4, title: "Projects", value: 2, description: "Active projects in progress", path: "/projects" },
    { id: 5, title: "Team Members", value: 2, description: "Current team size", path: "/team" },
    { id: 6, title: "Services", value: 2, description: "Available services offered", path: "/services" },
    { id: 7, title: "Videos", value: 2, description: "Published videos", path: "/videos" },
  ];
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.id}
            to={stat.path}
            className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-800">{stat.title}</h2>
            <p className="text-3xl font-bold text-blue-500 mt-2">{stat.value}</p>
            <p className="text-gray-600 mt-1">{stat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dashboard