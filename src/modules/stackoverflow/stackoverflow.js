import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, setSortCriteria } from "./stackoverflow.actions";

const StackOverflowSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { questions, loading, error, sortCriteria } = useSelector(
    (state) => state.stackOverflow
  );

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchQuestions(query));
    }
  };

  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortCriteria === "date") {
      return new Date(b.creation_date) - new Date(a.creation_date);
    } else if (sortCriteria === "reputation") {
      return b.owner.reputation - a.owner.reputation;
    }
    return 0;
  });

  return (
    <div>
      <h2>Stack Overflow Search</h2>
      <input
        type="text"
        placeholder="Enter search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <label>Sort by: </label>
        <select
          value={sortCriteria}
          onChange={(e) => dispatch(setSortCriteria(e.target.value))}
        >
          <option value="date">Date</option>
          <option value="reputation">Reputation</option>
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {sortedQuestions.map((question) => (
          <li key={question.question_id}>
            <a href={question.link} target="_blank" rel="noopener noreferrer">
              {question.title}
            </a>
            <p>
              Asked by: {question.owner.display_name} (
              {question.owner.reputation} reputation)
            </p>
            <p>
              Date: {new Date(question.creation_date * 1000).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackOverflowSearch;
