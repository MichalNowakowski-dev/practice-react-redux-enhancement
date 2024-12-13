import StackOverflowAPI from "./stackoverflow.api";
import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  SET_SORT_CRITERIA,
} from "./stackoverflow.types";

export const fetchQuestions = (query) => async (dispatch) => {
  dispatch({ type: FETCH_QUESTIONS_REQUEST });
  try {
    const data = await StackOverflowAPI.searchQuestions(query);
    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: data.items });
  } catch (error) {
    dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
  }
};

export const setSortCriteria = (criteria) => ({
  type: SET_SORT_CRITERIA,
  payload: criteria,
});
