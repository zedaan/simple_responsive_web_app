import React from "react";
import "./styles.css";

const NewsCard = ({ news: { title, published_date, byline }, media }) => {
  const mediaMetaData = media[0] && media[0]["media-metadata"];
  const newsThumb = mediaMetaData && mediaMetaData[0]?.url;

  return (
    <div className="card-content">
      <div className="card-img">
        <img src={newsThumb} alt="not available" />
      </div>
      <div className="news-wrapper">
        <div className="news-heading">
          <h3>{title}</h3>
        </div>
        <div className="news-byline">
          <h5>
            {byline}
            <span className="news-date">
              <i className="fas fa-calendar-day clander-icon"></i>
              {published_date}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
