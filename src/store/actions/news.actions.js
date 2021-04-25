import NewsActions from "../types/news.types";

export const getNewsByCountry = (countryCode) =>({
    type: NewsActions.GET_NEWS_BY_COUNTRY,
    payload: countryCode
});

export const getNewsSuccess = (news) =>({
    type: NewsActions.GET_NEWS_SUCCESS,
    payload: news
});