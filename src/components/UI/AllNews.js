import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function AllNews({ allNews }) {
  //   console.log(allNews);
  //   const { image_url, title, author, category, coment_count, id, description } =
  //     allNews;
  return (
    <>
      {allNews.map((news) => {
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="news" src={news.image_url} />}
        >
          <Meta
            title={title}
            description={`Total Comments :${news.comment_count}`}
          />
        </Card>;
      })}
    </>
  );
}

export default AllNews;
