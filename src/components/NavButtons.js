import React from "react";

const navButtons = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function NavButtons({ navigateToPage }) {
  return (
    <div className="nav-buttons">
      {navButtons.map((btn) => (
        <button
          key={btn.id}
          className="nav-button"
          onClick={() => navigateToPage(btn.id)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default NavButtons;
