import React from "react";
import { Button, Card, Col, Row } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

function AllNews({ allNews }) {
  console.log(allNews);
  return (
    <>
      <Row gutter={16}>
        {allNews?.map((news) => (
          <>
            {/* <Col style={contentStyle}>
              <Image src={news.image_url} fill alt="drawing_image" />
            </Col> */}

            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="newsImage" src={news.image_url} />}
              ></Card>

              <h1 style={{ fontSize: "20px" }}>{news.title}</h1>
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",

                  background: "#000",
                  width: "95%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  color: "gray",
                  margin: "10px 0px",
                }}
              >
                <span>
                  <CalendarOutlined /> {news.release_date}
                </span>
                <span>
                  <CommentOutlined /> {news.comment_count} Comments
                </span>
                <span>
                  <ProfileOutlined /> {news.category}
                </span>
              </p>

              <p style={{ fontSize: "20px" }}>
                {news?.description.length > 100
                  ? news?.description.slice(0, 70) + "..."
                  : news?.description}
              </p>

              <Link href={`/news/${news?.id}`}>
                <Button type="primary">
                  Keep Reading <ArrowRightOutlined />
                </Button>
              </Link>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
}

export default AllNews;
