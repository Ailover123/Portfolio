import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      onSearch(input.trim());
    }
  };

  const handleSearchClick = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search or type URL"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="search-icons">
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          onClick={handleSearchClick}
          style={{ cursor: "pointer" }}
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
