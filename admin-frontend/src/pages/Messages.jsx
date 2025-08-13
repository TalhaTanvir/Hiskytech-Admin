import React,{useState} from 'react'
import { FaTrash, FaEnvelopeOpenText, FaEnvelope } from "react-icons/fa";

function Messages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, I have a question about your services.",
      status: "Unread",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Please send me the pricing details.",
      status: "Read",
    },
  ]);

  const toggleStatus = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? { ...msg, status: msg.status === "Read" ? "Unread" : "Read" }
          : msg
      )
    );
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };
  return (
     <div className="p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{msg.id}</td>
                <td className="py-3 px-4">{msg.name}</td>
                <td className="py-3 px-4">{msg.email}</td>
                <td className="py-3 px-4 max-w-xs truncate">{msg.message}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      msg.status === "Read"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {msg.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center flex items-center justify-center gap-2">
                  {/* Toggle Status */}
                  <button
                    onClick={() => toggleStatus(msg.id)}
                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
                    title={
                      msg.status === "Read"
                        ? "Mark as Unread"
                        : "Mark as Read"
                    }
                  >
                    {msg.status === "Read" ? (
                      <FaEnvelope />
                    ) : (
                      <FaEnvelopeOpenText />
                    )}
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition"
                    title="Delete Message"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {messages.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Messages