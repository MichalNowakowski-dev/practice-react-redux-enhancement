import React from "react";
import GitHubSearch from "../src/modules/github/github";
import StackOverflowSearch from "../src/modules/stackoverflow/stackoverflow";

const Task05 = () => {
  return (
    <section>
      <h2>Task 05</h2>
      <div>
        <h1>API Search App</h1>
        <GitHubSearch />
        <hr />
        <StackOverflowSearch />
      </div>
    </section>
  );
};

export default Task05;
