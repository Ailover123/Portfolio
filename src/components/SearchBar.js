import React, { useState } from "react";

function SearchBar({ onSearch, inputValue, onInputChange }) {
  const [input, setInput] = useState("");

  // Use controlled input if inputValue is provided (for typing animation)
  const currentInput = inputValue !== undefined ? inputValue : input;

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (onInputChange) {
      onInputChange(value);
    } else {
      setInput(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentInput.trim() !== "") {
      onSearch(currentInput.trim());
    }
  };

  const handleSearchClick = () => {
    if (currentInput.trim() !== "") {
      onSearch(currentInput.trim());
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search or type URL"
        value={currentInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="search-icons">
        {/* Enhanced Voice Note Icon */}
        <svg
          className="search-icon voice-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "pointer", width: "20px", height: "20px" }}
          title="Voice Search"
        >
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>

        {/* Enhanced Google Lens Icon */}
        <svg
          className="search-icon lens-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "pointer", width: "20px", height: "20px" }}
          title="Search with camera"
        >
          <path d="M9 9l-3-3 2-2 3 3" />
          <path d="M15 15l3 3-2 2-3-3" />
          <circle cx="12" cy="12" r="3" />
          <path d="M21 16v-5.5c0-1.4-1.1-2.5-2.5-2.5h-1L15 5.5C14.4 4.6 13.5 4 12.5 4h-1C10.5 4 9.6 4.6 9 5.5L7 8h-1C4.1 8 3 9.1 3 10.5V16c0 1.4 1.1 2.5 2.5 2.5h13c1.4 0 2.5-1.1 2.5-2.5z" />
        </svg>

        {/* Search Button */}
        <button
          className="search-button"
          onClick={handleSearchClick}
          title="Search"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
