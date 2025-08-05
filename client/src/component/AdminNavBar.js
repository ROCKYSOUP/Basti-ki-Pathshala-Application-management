import React from "react";
import { useNavigate } from "react-router-dom";

function AdminNavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar" style={styles.navbar}>
      <h2 style={styles.title}>Basti Ki Pathshala</h2>
      <ul style={styles.ul}>
        <li style={styles.li} onClick={() => navigate("/pending-req")}>Pending Requests</li>
        <li style={styles.li} onClick={() => navigate("/approved-req")}>Approved Requests</li>
        <li style={styles.li} onClick={() => navigate("/in-touch-req")}>In-Touch Requests</li>
        <li style={styles.li} onClick={() => navigate("/")}>Log Out</li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#2e7d32", // dark green
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  },
  title: {
    fontSize: "1.8rem",
    margin: 0,
    fontWeight: "bold",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
  li: {
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default AdminNavBar;
