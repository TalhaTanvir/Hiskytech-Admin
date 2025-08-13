import React from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    { 
      id: 1, 
      name: "John Doe", 
      role: "Developer", 
      socialLinks: { instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe", twitter: "https://twitter.com/johndoe", linkedin: "https://linkedin.com/in/johndoe" } 
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      role: "Designer", 
      socialLinks: { instagram: "https://instagram.com/janesmith", facebook: "https://facebook.com/janesmith", twitter: "https://twitter.com/janesmith", linkedin: "https://linkedin.com/in/janesmith" } 
    },
  ];

  // Placeholder function for adding a new member
  const handleAddMember = () => {
    console.log("Add new member clicked!");
    // You can replace this with logic to open a modal or navigate to a form
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
        <button
          onClick={handleAddMember}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:shadow-lg text-white rounded-md transition-all duration-200"
        >
          <FaPlus />
          Add Member
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">ID</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Name</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Role</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Social Links</th>
              <th className="py-3 px-4 text-center text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 text-gray-700">{member.id}</td>
                <td className="py-4 px-4 text-gray-700">{member.name}</td>
                <td className="py-4 px-4 text-gray-700">{member.role}</td>
                <td className="py-4 px-4 text-gray-700">
                  <div className="flex space-x-2">
                    {member.socialLinks.instagram && (
                      <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a>
                    )}
                    {member.socialLinks.facebook && (
                      <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FB</a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">TW</a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LI</a>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4 text-center flex items-center justify-center gap-2">
                  <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200">
                    <FaEdit />
                  </button>
                  <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Team;