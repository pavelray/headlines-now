/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsList from '../../components/NewsList/NewsList.component';
import { getNewsByCountry } from '../../store/actions/news.actions';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
    const dispatch = useDispatch();
    const country = useSelector(state => state.location?.location.country_code);
    useEffect(()=>{
        dispatch(getNewsByCountry(country))
    },[country])
    return(
        <HomePageContainer>
            <h1>Headlines Now {country}</h1>
            <NewsList />
        </HomePageContainer>
    )
}

export default HomePage;