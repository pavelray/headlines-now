import React from "react";
import { Icon, Item } from "semantic-ui-react";
import { StyledItem } from "./NewsItem.styles";

const NewsItem = ({ article }) => {
  const publishDate = new Date(article.publishedAt).toDateString();
  return (
    <StyledItem>
      <Item.Image size="tiny" src={`${article.urlToImage}`} />
      <Item.Content>
        <Item.Header>
          {article.title}
        </Item.Header>
        <Item.Meta>
          Source: {article.source?.name}, {publishDate}
        </Item.Meta>
        <Item.Description>{article.description}</Item.Description>
        <Item.Extra>
          <a href={article.url} target="_blank" rel="noreferrer">
            Read Details <Icon name="angle double right" />
          </a>
        </Item.Extra>
      </Item.Content>
    </StyledItem>
  );
};

export default NewsItem;
