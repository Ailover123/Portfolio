import React, { useState } from "react";

const navTabs = ["All", "Images", "Videos", "News", "Maps"];

const dummyResults = [
  {
    title: "Nishal Gopal Poojary - Portfolio",
    url: "https://nishalportfolio.com",
    description:
      "Welcome to my portfolio showcasing projects, skills, and experience.",
  },
  {
    title: "GitHub - nishal",
    url: "https://github.com/nishal",
    description: "My GitHub repositories and contributions.",
  },
  {
    title: "LinkedIn - Nishal Gopal Poojary",
    url: "https://linkedin.com/in/nishal",
    description: "Professional profile and network.",
  },
];

function ResultsPage({ query, goHome, navigateToPage }) {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="results-container">
      <div className="results-header">
        <div className="results-search-container">
          <div
            className="logo-small"
            onClick={goHome}
            style={{ cursor: "pointer" }}
          >
            Google
          </div>
          <input
            type="text"
            className="results-search-box"
            defaultValue={query}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim() !== "") {
                navigateToPage("results");
              }
            }}
          />
        </div>
        <div className="results-nav">
          {navTabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="results-content">
        <div className="results-info">
          About {dummyResults.length} results for <strong>{query}</strong>
        </div>
        {dummyResults.map((result, index) => (
          <div
            key={index}
            className="result-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <a
              href={result.url}
              className="result-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.url}
            </a>
            <a
              href={result.url}
              className="result-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.title}
            </a>
            <div className="result-description">{result.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
