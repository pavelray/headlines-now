import NewsActions from "../types/news.types";

const INITIAL_STATE = {
  news: [],
  articles: [],
  totalResults: '',
  totalPages: 1
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActions.GET_NEWS_SUCCESS:
      const totalPages = Math.round(action.payload.totalResults/20);
      const articles = action.payload.articles;
      const totalResults = action.payload.totalResults;
      return {
        ...state,
        articles: [...state.articles, ...articles],
        totalPages,
        totalResults
      };
    default:
      return state;
  }
};

export default newsReducer;
