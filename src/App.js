/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage.component'
import { getUserLocation } from './store/actions/location.actions';

function App() {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location?.location);
  useEffect(()=> {
    if(Object.keys(location).length === 0){
      dispatch(getUserLocation());
    }
  },[])

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
