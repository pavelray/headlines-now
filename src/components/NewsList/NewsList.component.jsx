/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Item } from "semantic-ui-react";
import NewsItem from "../NewsItem/NewsItem.component";

const NewsList = ({lastNewsElementRef, newsList}) => {
  return (
    <Item.Group>
      {newsList?.map((news, index) => {
        if (newsList.length === index + 1) {
          return (
            <NewsItem key={index} lastNewsElementRef={lastNewsElementRef} article={news} />
          );
        }
        return <NewsItem key={index} article={news} />;
      })}
    </Item.Group>
  );
};

export default NewsList;
