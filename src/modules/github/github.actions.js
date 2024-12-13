// src/modules/github/github.actions.js
import GitHubAPI from "./github.api";
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  SET_FILTER,
} from "./github.types";

export const fetchRepos = (userName) => async (dispatch) => {
  dispatch({ type: FETCH_REPOS_REQUEST });
  try {
    const repos = await GitHubAPI.getRepos(userName);
    dispatch({ type: FETCH_REPOS_SUCCESS, payload: repos });
  } catch (error) {
    dispatch({ type: FETCH_REPOS_FAILURE, payload: error.message });
  }
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
