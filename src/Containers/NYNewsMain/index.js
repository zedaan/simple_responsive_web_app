import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import NewsCard from "../../Components/Card";
import "./styles.css";

const NYNewsMain = () => {
  const [newsData, setNewsData] = useState({
    error: null,
    isLoaded: false,
    result: [],
  });

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=kjePUvL3jLdMd7KtNp2Pk6E9tZuIFpBN"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setNewsData({
            isLoaded: true,
            result: result.results,
          });
        },
        (error) => {
          setNewsData({
            isLoaded: true,
            error,
          });
        }
      );
  }, []);
  const { isLoaded } = newsData;
  return (
    <div className="container">
      <NavBar />
      {!isLoaded ? (
        <div className="loader"> </div>
      ) : (
        <div className="news-card-wrapper">
          {newsData?.result?.map((item, i) => {
            return <NewsCard news={item} media={item.media} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};
export default NYNewsMain;
