import NewsActions from "../types/news.types";

export const getNewsByCountry = (countryCode, pageNumber = 1) =>({
    type: NewsActions.GET_NEWS_BY_COUNTRY,
    payload: {countryCode,pageNumber}
});

export const getNewsSuccess = (news) =>({
    type: NewsActions.GET_NEWS_SUCCESS,
    payload: news
});