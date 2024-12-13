class StackOverflowAPI {
  url = "https://api.stackexchange.com/2.3";

  searchQuestions(query) {
    return fetch(
      `${this.url}/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`
    )
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp;
  }
}

const stackOverflowAPIInstance = new StackOverflowAPI();
export default stackOverflowAPIInstance;
