import React, { useState } from "react";

const SummaryForm = ({ onSummarize }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSummarize(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter article URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Summarize</button>
    </form>
  );
};

export default SummaryForm;
