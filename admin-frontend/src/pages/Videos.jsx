import React from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

function Videos() {
  const videos = [
    { id: 1, video: "video1.mp4" },
    { id: 2, video: "video2.mp4" },
  ];

  // Placeholder function for adding a new video
  const handleAddVideo = () => {
    console.log("Add new video clicked!");
    // You can replace this with logic to open a modal or navigate to a form
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Videos</h1>
        <button
          onClick={handleAddVideo}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:shadow-lg text-white rounded-md transition-all duration-200"
        >
          <FaPlus />
          Add Video
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">ID</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Video</th>
              <th className="py-3 px-4 text-center text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {videos.map((video) => (
              <tr key={video.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 text-gray-700">{video.id}</td>
                <td className="py-4 px-4 text-gray-700">{video.video}</td>
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

export default Videos;