import NewsActions from "../types/news.types";

const INITIAL_STATE = {
  news: [],
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActions.GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;