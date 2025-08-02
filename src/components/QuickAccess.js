import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiKaggle } from "react-icons/si";

const quickItems = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nishalpoojary/",
    icon: (
      <img
        src={require("../assets/linkedin.jpg")}
        alt="LinkedIn"
        style={{ width: 24, height: 24 }}
      />
    ),
  },

  {
    name: "Unstop",
    url: "https://unstop.com/u/nishapoo9082",
    icon: (
      <img
        src={require("../assets/unstop.jpg")}
        alt="Unstop"
        style={{ width: 32, height: 32 }}
      />
    ),
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/nishalpoojary71/",
    icon: (
      <img
        src={require("../assets/leetcode.png")}
        alt="LeetCode"
        style={{ width: 38, height: 38 }}
      />
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/Ailover123",
    icon: (
      <img
        src={require("../assets/github.png")}
        alt="LeetCode"
        style={{ width: 32, height: 32 }}
      />
    ),
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/nishalpoojary235",
    icon: (
      <img
        src={require("../assets/kaggle.png")}
        alt="Kaggle"
        style={{ width: 32, height: 32 }}
      />
    ),
  },
];

function QuickAccess() {
  return (
    <div className="quick-access">
      <div className="quick-access-grid">
        {quickItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="quick-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="quick-icon">{item.icon}</div>
            <div className="quick-name">{item.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
