import React from "react";
import { useSelector } from "react-redux";
import { Item } from "semantic-ui-react";
import NewsItem from "../NewsItem/NewsItem.component";

const NewsList = () => {
  const newsList = useSelector((state) => state.headlines?.news?.articles);
  return (
    <Item.Group>
      {newsList?.map((news, index) => (
        <NewsItem key={index} article={news}/>
      ))}
    </Item.Group>
  );
};

export default NewsList;
