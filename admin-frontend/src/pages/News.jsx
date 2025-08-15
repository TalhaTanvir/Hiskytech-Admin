import React from 'react'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';


function News() {

    const news = [
    {
      id: 1,
      title: "New Product Launch",
      picture: "https://via.placeholder.com/150",
      comments: 5,
      date: "2025-08-05",
    },
    {
      id: 2,
      title: "Company Milestone",
      picture: "https://via.placeholder.com/150",
      comments: 3,
      date: "2025-08-10",
    },
  ];

   // Placeholder function for adding a new news article
  const handleAddNews = () => {
    console.log("Add new news clicked!");
    // You can replace this with logic to open a modal or navigate to a form
  };

  // Function to handle delete with confirmation
  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete the news article "${title}"?`)) {
      console.log(`Deleting news article with ID: ${id}`);
      // You can replace this with actual delete logic (e.g., API call or state update)
    }
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">News</h1>
        <button
          onClick={handleAddNews}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:shadow-lg text-white rounded-md transition-all duration-200"
        >
          <FaPlus />
          Add News
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">ID</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Title</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Picture</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Comments</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Date</th>
              <th className="py-3 px-4 text-center text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {news.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 text-gray-700">{article.id}</td>
                <td className="py-4 px-4 text-gray-700">{article.title}</td>
                <td className="py-4 px-4 text-gray-700">
                  <img src={article.picture} alt={article.title} className="h-16 w-16 object-cover rounded" />
                </td>
                <td className="py-4 px-4 text-gray-700">{article.comments}</td>
                <td className="py-4 px-4 text-gray-700">{article.date}</td>
                <td className="py-4 px-4 text-center flex items-center justify-center gap-2">
                  <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(article.id, article.title)}
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default News