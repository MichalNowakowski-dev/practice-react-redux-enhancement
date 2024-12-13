import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, setFilter } from "./github.actions";

const GitHubSearch = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { repos, loading, error, searchQuery } = useSelector((state) => ({
    repos: state.github.repos,
    loading: state.github.loading,
    error: state.github.error,
    searchQuery: state.github.searchQuery || "", // Domyślny łańcuch znaków
  }));

  const handleSearch = () => {
    if (username.trim()) {
      dispatch(fetchRepos(username));
    }
  };

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name && repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>GitHub Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <label>Filter by repository name: </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubSearch;
