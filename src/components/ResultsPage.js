import React, { useState, useEffect } from "react";

// Dummy AI overview content (replace with actual content)
const aiOverviewContent = {
  about: "This is a quick AI-generated overview about Nishal.",
  skills: "Nishal is skilled in React, Java, ML, and Flutter.",
  experience: "Nishal has worked on several full-stack projects.",
  projects: "Some key projects include ZenLoop, NanBot, and Datadash.",
  contact: "You can reach out to Nishal via LinkedIn or GitHub.",
};

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
  const [isLoading, setIsLoading] = useState(true);
  const [showAiOverview, setShowAiOverview] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowAiOverview(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  // Determine AI content type
  const queryType = query.toLowerCase().includes("about")
    ? "about"
    : query.toLowerCase().includes("skills")
    ? "skills"
    : query.toLowerCase().includes("experience")
    ? "experience"
    : query.toLowerCase().includes("projects")
    ? "projects"
    : query.toLowerCase().includes("contact")
    ? "contact"
    : "about";

  const aiContent = aiOverviewContent[queryType];

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

        {/* AI Overview Section */}
        {showAiOverview && (
          <div className="ai-overview-box">
            <h3>AI Overview</h3>
            <p>{aiContent}</p>
          </div>
        )}

        {/* Search Results */}
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
