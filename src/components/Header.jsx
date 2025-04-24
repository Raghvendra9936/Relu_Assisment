import React from "react";
import { Search, Filter } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-1 w-full max-w-md">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search here..."
          className="outline-none flex-1 text-sm"
        />
      </div>
      <button className="ml-4 bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center space-x-2">
        <Filter size={16} />
        <span>Filters</span>
      </button>
    </header>
  );
}