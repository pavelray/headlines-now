/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsList from '../../components/NewsList/NewsList.component';
import { getNewsByCountry } from '../../store/actions/news.actions';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
    const dispatch = useDispatch();
    //const [pageNumber, setPageNumber] = useState(1);

    const country = useSelector(state => state.location?.location.country_code);
    useEffect(()=>{
        dispatch(getNewsByCountry(country))
    },[country]);

    const totalResults = useSelector((state) => state.headlines?.totalResults);
    const newsList = useSelector((state) => state.headlines?.articles);
    const hasMore = totalResults > newsList?.length;
    const currentPage = Math.round(newsList?.length/20);
    const observer = useRef(null);
  
    const lastNewsElementRef = useCallback(
        (node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
            console.log("visible", currentPage, hasMore);
            //setPageNumber(pageNumber+1);
            if(hasMore)
                dispatch(getNewsByCountry(country, currentPage+1));
            }
        });
        if (node) observer.current.observe(node);
        },
        [hasMore]
    );
    
    return(
        <HomePageContainer>
            <h1>Headlines Now {country}</h1>
            <NewsList lastNewsElementRef={lastNewsElementRef} newsList={newsList} />
        </HomePageContainer>
    )
}

export default HomePage;