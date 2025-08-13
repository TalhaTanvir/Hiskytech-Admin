import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="bg-[#E8E8E8] w-full px-4 py-3 shadow-sm">
      <div className="flex items-center justify-end">
        <div
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          ref={dropdownRef}
        >
          {/* Admin Image */}
          <img
            src="src/assets/images/admin.jpg"
            alt="admin"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />

          {/* Name & Role (hidden on small screens) */}
          <div className="leading-tight hidden sm:block">
            <h1 className="text-sm font-bold">Talha</h1>
            <p className="text-xs">Admin</p>
          </div>

          {/* Dropdown Icon */}
          <FaChevronDown className="text-gray-700 text-sm" />

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Manage Account
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Change Password
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
