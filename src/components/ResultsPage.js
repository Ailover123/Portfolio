import React, { useState, useEffect } from "react";

// Enhanced AI overview content
const aiOverviewContent = {
  about: {
    title: "About Nishal Gopal Poojary",
    summary:
      "Nishal is a passionate full-stack developer and AI enthusiast with experience in modern web technologies and machine learning.",
    points: [
      "Computer Science student with focus on AI and web development",
      "Active contributor to open-source projects",
      "Experienced in building scalable web applications",
    ],
  },
  skills: {
    title: "Technical Skills",
    summary:
      "Nishal has expertise across multiple programming languages and frameworks, specializing in full-stack development.",
    points: [
      "Frontend: React, Flutter, HTML5, CSS3, JavaScript",
      "Backend: Java, Node.js, Python, RESTful APIs",
      "Machine Learning: TensorFlow, scikit-learn, data analysis",
      "Tools: Git, Docker, AWS, Firebase",
    ],
  },
  experience: {
    title: "Professional Experience",
    summary:
      "Nishal has hands-on experience through various projects, internships, and freelance work in software development.",
    points: [
      "Full-stack development internship at tech startup",
      "Freelance mobile app development using Flutter",
      "Machine learning research project collaboration",
      "Active participation in hackathons and coding competitions",
    ],
  },
  projects: {
    title: "Key Projects",
    summary:
      "Nishal has developed several notable projects showcasing skills in web development, mobile apps, and AI.",
    points: [
      "ZenLoop: Meditation and mindfulness mobile application",
      "NanBot: AI-powered chatbot with natural language processing",
      "DataDash: Real-time analytics dashboard for data visualization",
      "Portfolio website with modern responsive design",
    ],
  },
  contacts: {
    title: "Contact Information",
    summary:
      "Connect with Nishal through various professional platforms and social media channels.",
    points: [
      "LinkedIn: Professional networking and career updates",
      "GitHub: Code repositories and open-source contributions",
      "Email: Direct communication for opportunities",
      "Portfolio: Comprehensive showcase of work and achievements",
    ],
  },
};

const navTabs = ["About", "Skills", "Experience", "Projects", "Contacts"];

const dummyResults = [
  {
    title: "Nishal Gopal Poojary - Portfolio",
    url: "https://nishalportfolio.com",
    description:
      "Welcome to my portfolio showcasing projects, skills, and experience in full-stack development, machine learning, and mobile app development.",
    favicon: "🌐",
  },
  {
    title: "GitHub - nishalgopal",
    url: "https://github.com/nishalgopal",
    description:
      "Explore my open-source contributions, personal projects, and code repositories. Active contributor with 50+ repositories and 200+ commits.",
    favicon: "🐙",
  },
  {
    title: "LinkedIn - Nishal Gopal Poojary",
    url: "https://linkedin.com/in/nishalgopal",
    description:
      "Professional profile showcasing experience in software development, AI/ML projects, and technical skills. Connect for opportunities.",
    favicon: "💼",
  },
  {
    title: "ZenLoop - Meditation App | Nishal's Projects",
    url: "https://github.com/nishalgopal/zenloop",
    description:
      "A comprehensive meditation and mindfulness mobile application built with Flutter. Features guided meditations, progress tracking, and personalized recommendations.",
    favicon: "🧘",
  },
  {
    title: "NanBot AI Chatbot | Machine Learning Project",
    url: "https://github.com/nishalgopal/nanbot",
    description:
      "An intelligent chatbot powered by natural language processing and machine learning algorithms. Built with Python and TensorFlow.",
    favicon: "🤖",
  },
  {
    title: "DataDash Analytics Platform",
    url: "https://datadash-nishal.vercel.app",
    description:
      "Real-time data visualization dashboard with interactive charts and analytics. Built using React, D3.js, and modern web technologies.",
    favicon: "📊",
  },
];

// Helper function to get results count based on query
const getResultsCount = (query) => {
  const counts = {
    about: "About 847,000",
    skills: "About 1,240,000",
    experience: "About 592,000",
    projects: "About 1,890,000",
    contacts: "About 234,000",
  };

  const queryType = query.toLowerCase().includes("about")
    ? "about"
    : query.toLowerCase().includes("skills")
    ? "skills"
    : query.toLowerCase().includes("experience")
    ? "experience"
    : query.toLowerCase().includes("projects")
    ? "projects"
    : query.toLowerCase().includes("contacts")
    ? "contacts"
    : "about";

  return counts[queryType] || "About 500,000";
};

function ResultsPage({ query, goHome, navigateToPage }) {
  const [activeTab, setActiveTab] = useState("About");
  const [isLoading, setIsLoading] = useState(true);
  const [showAiOverview, setShowAiOverview] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowAiOverview(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [query]);

  // Determine AI content type based on query or active tab
  const getContentType = () => {
    if (query.toLowerCase().includes("about")) return "about";
    if (query.toLowerCase().includes("skills")) return "skills";
    if (query.toLowerCase().includes("experience")) return "experience";
    if (query.toLowerCase().includes("projects")) return "projects";
    if (query.toLowerCase().includes("contacts")) return "contacts";
    return activeTab.toLowerCase();
  };

  const contentType = getContentType();
  const aiContent = aiOverviewContent[contentType];
  const resultsCount = getResultsCount(query);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleSearchSubmit = (searchTerm) => {
    if (searchTerm.trim() !== "") {
      // You can add logic here to update the query and refresh results
      console.log("New search:", searchTerm);
    }
  };

  return (
    <div className="results-container">
      {/* Header with search bar and navigation */}
      <div className="results-header">
        <div className="results-search-container">
          <div
            className="google-logo-small"
            onClick={goHome}
            style={{ cursor: "pointer" }}
          >
            <span style={{ color: "#4285f4" }}>G</span>
            <span style={{ color: "#ea4335" }}>o</span>
            <span style={{ color: "#fbbc05" }}>o</span>
            <span style={{ color: "#4285f4" }}>g</span>
            <span style={{ color: "#34a853" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
          </div>

          <div className="search-input-container">
            <input
              type="text"
              className="results-search-input"
              defaultValue={query}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() !== "") {
                  handleSearchSubmit(e.target.value);
                }
              }}
            />
            <div className="search-tools">
              <button className="search-tool-btn" title="Search by voice">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </button>
              <button className="search-tool-btn" title="Search by image">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14,4H10V3A1,1 0 0,0 9,2H7A1,1 0 0,0 6,3V4H2A1,1 0 0,0 1,5V19A1,1 0 0,0 2,20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4M13,18H3V6H6V5H7V4H9V5H10V6H13V18M11,8H5V16H11V8Z" />
                </svg>
              </button>
              <button
                className="search-btn"
                onClick={() => handleSearchSubmit(query)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="results-nav">
            {navTabs.map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${tab === activeTab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="results-content">
        {/* Results count and timing */}
        <div className="results-stats">
          {resultsCount} results (0.48 seconds)
        </div>

        {/* AI Overview Section */}
        {showAiOverview && !isLoading && (
          <div className="ai-overview-box">
            <div className="ai-overview-header">
              <div className="ai-overview-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.5,2A1.5,1.5 0 0,0 8,3.5A1.5,1.5 0 0,0 9.5,5A1.5,1.5 0 0,0 11,3.5A1.5,1.5 0 0,0 9.5,2M14.5,2A1.5,1.5 0 0,0 13,3.5A1.5,1.5 0 0,0 14.5,5A1.5,1.5 0 0,0 16,3.5A1.5,1.5 0 0,0 14.5,2M12,7L10.5,15H13.5L12,7M4,7V9H8V7H4M16,7V9H20V7H16M2,11V13H6V11H2M18,11V13H22V11H18M7,15V17H11V15H7M13,15V17H17V15H13M5,19V21H9V19H5M15,19V21H19V19H15Z" />
                </svg>
              </div>
              <span className="ai-overview-title">AI Overview</span>
            </div>

            <div className="ai-overview-content">
              <div className="ai-content-left">
                <h3 className="ai-content-title">{aiContent.title}</h3>
                <p className="ai-content-summary">{aiContent.summary}</p>
                <ul className="ai-content-points">
                  {aiContent.points.map((point, index) => (
                    <li
                      key={index}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ai-content-right">
                <div className="ai-image-container">
                  {/* Placeholder for your PNG file */}
                  <img
                    src={require("../assets/nishal.jpg")}
                    alt="Nishal Gopal Poojary"
                    className="ai-overview-image"
                  />
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <rect
                      width="120"
                      height="120"
                      rx="12"
                      fill="#f8f9fa"
                      stroke="#dadce0"
                    />
                    <path
                      d="M50 45L55 55L65 40L80 60H40L50 45Z"
                      fill="#9aa0a6"
                    />
                    <circle cx="55" cy="35" r="5" fill="#9aa0a6" />
                    <text
                      x="60"
                      y="85"
                      fontSize="10"
                      fill="#5f6368"
                      textAnchor="middle"
                    >
                      Add your image here
                    </text>
                  </svg>
                </div>

                <div className="ai-image-caption">
                  <p className="image-source">nishalportfolio.com</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}

        {/* Search Results */}
        {!isLoading &&
          dummyResults.map((result, index) => (
            <div
              key={index}
              className="search-result"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="result-header">
                <div className="result-favicon">{result.favicon}</div>
                <div className="result-url-info">
                  <div className="result-breadcrumb">
                    {new URL(result.url).hostname}
                  </div>
                  <div className="result-url">{result.url}</div>
                </div>
                <div className="result-actions">
                  <button className="result-action-btn" title="More options">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <h3 className="result-title">
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  {result.title}
                </a>
              </h3>

              <p className="result-description">{result.description}</p>
            </div>
          ))}

        {/* Related searches */}
        <div className="related-searches">
          <h3 className="related-title">Related searches</h3>
          <div className="related-list">
            <button className="related-item">Nishal portfolio projects</button>
            <button className="related-item">
              Full stack developer portfolio
            </button>
            <button className="related-item">React Flutter developer</button>
            <button className="related-item">Machine learning projects</button>
            <button className="related-item">
              GitHub repositories showcase
            </button>
            <button className="related-item">
              Professional developer LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
