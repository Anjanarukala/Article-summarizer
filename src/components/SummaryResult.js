import React from "react";

const SummaryResult = ({ summary }) => {
  return (
    <div>
      <h2>Summary</h2>
      <p>{summary || "Your summarized content will appear here."}</p>
    </div>
  );
};

export default SummaryResult;
