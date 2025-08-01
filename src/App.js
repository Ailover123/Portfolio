import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import QuickAccess from "./components/QuickAccess";
import DiscoverSection from "./components/DiscoverSection";
import ResultsPage from "./components/ResultsPage";

function App() {
  const [page, setPage] = useState("home");

  const navigateToPage = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      {page === "home" && (
        <div className="home-container">
          <SearchBar onSearch={() => navigateToPage("results")} />
          <QuickAccess />
          <DiscoverSection />
        </div>
      )}
      {page === "results" && (
        <ResultsPage onBack={() => navigateToPage("home")} />
      )}
    </>
  );
}

export default App;
