import React, { useState, useEffect, createContext } from "react";
import SearchBar from "./components/SearchBar";
import QuickAccess from "./components/QuickAccess";
import DiscoverSection from "./components/DiscoverSection";
import SearchOptions from "./components/SearchOptions";
import ResultsPage from "./components/ResultsPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

// Create Theme Context
const ThemeContext = createContext();

function App() {
  const [typingText, setTypingText] = useState("");
  const [page, setPage] = useState("home");
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const navigateToPage = (pageName) => {
    setPage(pageName);
    if (pageName === "home") {
      setSelectedOption(null);
      setSearchInput("");
      setIsTyping(false);
    }
  };

  const handleOptionSelect = (option) => {
    const fullQuery = `Nishal ${option}`;
    setSelectedOption(option);
    setPage("home");

    // Reset states
    setTypingText("");
    setSearchInput("");
    setIsTyping(true);

    // Start typing animation
    let current = 0;
    setTimeout(() => {
      const typeChar = () => {
        if (current < fullQuery.length) {
          setTypingText(fullQuery.substring(0, current + 1));
          current++;
          setTimeout(typeChar, 80);
        } else {
          setIsTyping(false);
          setSearchInput(fullQuery);
          setPage("results");
        }
      };
      typeChar();
    }, 50);
  };

  const handleSearch = (query) => {
    if (!isTyping) {
      setSearchInput(query); // Store the search query
      setPage("results");
    }
  };

  const handleInputChange = (value) => {
    if (!isTyping) {
      setSearchInput(value);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  // Single return statement with proper structure
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        {page === "home" && (
          <div className="home-container">
            <ThemeToggle />
            <div className="google-logo">
              <span style={{ color: "#4285f4" }}>G</span>
              <span style={{ color: "#ea4335" }}>o</span>
              <span style={{ color: "#fbbc05" }}>o</span>
              <span style={{ color: "#4285f4" }}>g</span>
              <span style={{ color: "#34a853" }}>l</span>
              <span style={{ color: "#ea4335" }}>e</span>
            </div>

            <SearchBar
              onSearch={handleSearch}
              inputValue={isTyping ? typingText : searchInput}
              onInputChange={handleInputChange}
              isTyping={isTyping}
            />
            {/* Show typing cursor effect */}
            {isTyping && (
              <div className="typing-indicator">
                <span className="cursor">|</span>
              </div>
            )}

            <QuickAccess />
            <SearchOptions onSelect={handleOptionSelect} />
            <DiscoverSection />

            {/* Show results after typing animation completes */}
            {selectedOption && !isTyping && (
              <div className="results-section">
                {selectedOption === "about" && <About />}
                {selectedOption === "skills" && <Skills />}
                {selectedOption === "experience" && <Experience />}
                {selectedOption === "projects" && <Projects />}
                {selectedOption === "contact" && <Contact />}
              </div>
            )}
          </div>
        )}

        {page === "results" && (
          <ResultsPage
            onBack={() => navigateToPage("home")}
            searchInput={searchInput}
            query={selectedOption ? `Nishal ${selectedOption}` : searchInput}
          />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
