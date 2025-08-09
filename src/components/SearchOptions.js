import React from "react";

const options = [
  {
    name: "About",
    icon: (
      <svg
        className="option-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    query: "about",
  },
  {
    name: "Skills",
    icon: (
      <svg
        className="option-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    query: "skills",
  },
  {
    name: "Experience",
    icon: (
      <svg
        className="option-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    query: "experience",
  },
  {
    name: "Projects",
    icon: (
      <svg
        className="option-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
    query: "projects",
  },
  {
    name: "Contact",
    icon: (
      <svg
        className="option-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    query: "contact",
  },
];

function SearchOptions({ onSelect }) {
  return (
    <div className="search-options">
      {options.map((option) => (
        <div
          key={option.name}
          className="mini-search-container"
          onClick={() => onSelect(option.query)} // Use option.query instead of option.name
        >
          <div className="mini-search-box">
            <span className="option-icon-container">{option.icon}</span>
            <span className="option-text">Nishal {option.name}</span>
            <div className="mini-search-icons">
              <svg
                className="mini-search-icon"
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchOptions;
