import React from "react";

const dummyLinkedInPosts = [
  {
    id: 1,
    title: "Excited to share my latest project on React portfolio!",
    description:
      "Built a Google-style portfolio with React, showcasing my skills and projects.",
    date: "August 1, 2025",
    url: "https://linkedin.com/posts/nishal_latest-react-portfolio",
  },
  {
    id: 2,
    title: "Attended a great webinar on modern web development.",
    description:
      "Learned about React hooks, context API, and performance optimization.",
    date: "July 28, 2025",
    url: "https://linkedin.com/posts/nishal_webinar-modern-web-dev",
  },
  {
    id: 3,
    title: "Sharing tips on improving coding skills.",
    description:
      "Practice daily, read docs, and contribute to open source projects.",
    date: "July 20, 2025",
    url: "https://linkedin.com/posts/nishal_coding-tips",
  },
];

function DiscoverSection() {
  return (
    <div className="discover-section">
      <div className="discover-header">
        <div className="discover-title">Discover</div>
      </div>
      <div className="discover-content">
        {dummyLinkedInPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="discover-item"
          >
            <div className="discover-icon" style={{ background: "#0077b5" }}>
              🔗
            </div>
            <div className="discover-text">
              <div className="discover-main">{post.title}</div>
              <div className="discover-sub">{post.description}</div>
              <div
                className="discover-sub"
                style={{ fontSize: "10px", marginTop: "4px" }}
              >
                {post.date}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DiscoverSection;
