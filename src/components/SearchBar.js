import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App"; // Import ThemeContext

function SearchBar({
  onSearch,
  inputValue,
  onInputChange,
  theme: propTheme,
  isTyping,
}) {
  const [input, setInput] = useState("");
  const [showMicPopup, setShowMicPopup] = useState(false);
  const [showLensAnimation, setShowLensAnimation] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  // Try to use theme from context, fallback to prop, then localStorage
  let contextTheme;
  try {
    const context = useContext(ThemeContext);
    contextTheme = context?.theme;
  } catch (error) {
    contextTheme = null;
  }

  const theme =
    contextTheme || propTheme || localStorage.getItem("theme") || "light";

  // Debug: Log theme changes
  useEffect(() => {
    console.log("SearchBar theme updated:", theme);
  }, [theme]);

  const currentInput = inputValue || input;

  const quotes = [
    "Let curiosity do the talking!",
    "Explore my world—one click at a time!",
    "Speak? Nah. Let your curiosity guide you!",
    "Why listen? When you can explore visually!",
    "No need to talk—just browse and discover!",
  ];

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

  const handleMicClick = () => {
    setShowMicPopup(true);
    setCurrentQuote(Math.floor(Math.random() * quotes.length));
    setTimeout(() => setShowMicPopup(false), 3000);
  };

  const handleLensClick = () => {
    setShowLensAnimation(true);
    setTimeout(() => setShowLensAnimation(false), 2000);
  };

  return (
    <div
      className={`search-container ${theme === "dark" ? "dark-theme" : ""}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "584px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        className="search-box"
        placeholder="Search or type URL"
        disabled={isTyping}
        value={currentInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          height: "46px",
          border: theme === "dark" ? "1px solid #5f6368" : "1px solid #dfe1e5",
          borderRadius: "24px",
          padding: "0 45px 0 16px",
          fontSize: "16px",
          outline: "none",
          transition: "all 0.3s ease",
          background: theme === "dark" ? "#303134" : "#fff",
          color: theme === "dark" ? "#e8eaed" : "#202124",
        }}
        onFocus={(e) => {
          if (theme === "dark") {
            e.target.style.borderColor = "#4285f4";
            e.target.style.boxShadow = "0 0 0 1px #4285f4";
          } else {
            e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            e.target.style.borderColor = "rgba(223, 225, 229, 0)";
          }
        }}
        onBlur={(e) => {
          e.target.style.borderColor = theme === "dark" ? "#5f6368" : "#dfe1e5";
          e.target.style.boxShadow = "none";
        }}
        onMouseEnter={(e) => {
          if (!e.target.matches(":focus")) {
            e.target.style.boxShadow =
              theme === "dark"
                ? "0 2px 8px rgba(0, 0, 0, 0.3)"
                : "0 2px 8px rgba(0, 0, 0, 0.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (!e.target.matches(":focus")) {
            e.target.style.boxShadow = "none";
          }
        }}
      />
      <div
        className="search-icons"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {/* Mic Popup - Fixed positioning relative to mic icon */}
        {showMicPopup && (
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              right: "76px", // Changed from "40px" to position above mic icon
              background: "#4285f4",
              color: "white",
              padding: "12px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "500",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(66, 133, 244, 0.3)",
              animation: "popupSlideIn 0.3s ease-out",
              zIndex: 1000,
            }}
          >
            {quotes[currentQuote]}
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                right: "20px",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #4285f4",
              }}
            />
          </div>
        )}

        {/* Voice Icon */}
        <div
          onClick={handleMicClick}
          style={{
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            backgroundColor: showMicPopup
              ? "rgba(234, 67, 53, 0.1)"
              : "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              theme === "dark"
                ? "rgba(234, 67, 53, 0.15)"
                : "rgba(234, 67, 53, 0.1)";
          }}
          onMouseLeave={(e) => {
            if (!showMicPopup) {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "24px",
              height: "24px",
              color: showMicPopup ? "#ea4335" : "#4285f4",
              transition: "all 0.2s ease",
            }}
            title="Voice Search"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </div>

        {/* Lens Icon */}
        <div
          onClick={handleLensClick}
          style={{
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            backgroundColor: showLensAnimation
              ? "rgba(66, 133, 244, 0.1)"
              : "transparent",
            transform: showLensAnimation ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              theme === "dark"
                ? "rgba(66, 133, 244, 0.15)"
                : "rgba(66, 133, 244, 0.1)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            if (!showLensAnimation) {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "24px",
              height: "24px",
              color: "#4285f4",
              transition: "all 0.2s ease",
              filter: showLensAnimation
                ? "drop-shadow(0 0 8px rgba(66, 133, 244, 0.5))"
                : "none",
            }}
            title="Search with camera"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
            {showLensAnimation && (
              <>
                <line
                  x1="8"
                  y1="9"
                  x2="16"
                  y2="9"
                  style={{
                    animation: "scanLine 0.8s ease-in-out infinite",
                    strokeWidth: "1",
                  }}
                />
                <line
                  x1="8"
                  y1="17"
                  x2="16"
                  y2="17"
                  style={{
                    animation: "scanLine 0.8s ease-in-out infinite 0.4s",
                    strokeWidth: "1",
                  }}
                />
              </>
            )}
          </svg>
        </div>

        {/* Search Icon */}
        <button
          className="search-button"
          onClick={handleSearchClick}
          title="Search"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              theme === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.04)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "24px",
              height: "24px",
              color: "#9aa0a6",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes popupSlideIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes scanLine {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default SearchBar;
