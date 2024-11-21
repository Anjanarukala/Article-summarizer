import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const fetchSummary = async () => {
    try {
      const response = await axios.get(
        `https://extract-and-summarize.p.rapidapi.com/extract/`,
        {
          params: { url },
          headers: {
            "x-rapidapi-host": "extract-and-summarize.p.rapidapi.com",
            "x-rapidapi-key": "245e387e6amsh5ecf628cdcf436ep14f1b4jsnde04f705f2e6",
          },
        }
      );

      console.log("API Response:", response.data); // Log response to debug

      // Set the title, description, and image if available
      setTitle(response.data.title || "No title available");
      setImage(response.data.image || "");
      setSummary(response.data.description || "Summary not available.");
      setError("");
    } catch (err) {
      console.error("Error fetching summary:", err);
      setError("Failed to fetch the summary. Please try again.");
      setSummary("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Article Summarizer</h1>
        <p style={styles.subheading}>Get a brief summary of any article by pasting its URL.</p>
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter article URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchSummary} style={styles.button}>
          Summarize
        </button>
      </div>

      {title && (
        <div style={styles.titleContainer}>
          <h3 style={styles.title}>{title}</h3>
        </div>
      )}

      {image && (
        <div style={styles.imageContainer}>
          <img src={image} alt="Article" style={styles.image} />
        </div>
      )}

      {summary && (
        <div style={styles.summaryContainer}>
          <h3 style={styles.summaryHeading}>Summary:</h3>
          <p style={styles.summary}>{summary}</p>
        </div>
      )}

      {error && (
        <div style={styles.errorContainer}>
          <p style={styles.error}>{error}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    margin: 0,
  },
  subheading: {
    fontSize: "1.1rem",
    color: "#555",
    marginTop: "10px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    width: "60%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  titleContainer: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    fontWeight: "bold",
  },
  imageContainer: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  summaryContainer: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  summaryHeading: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  summary: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  errorContainer: {
    marginTop: "20px",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "10px",
    borderRadius: "5px",
  },
  error: {
    fontSize: "1rem",
    margin: 0,
  },
};

export default App;
