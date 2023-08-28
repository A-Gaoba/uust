import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsData } from "../../utils/Api";

const NewsArticle = () => {
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchNewsData().then((data) => {
      const selectedNews = data.find((item) => item.id === parseInt(id));
      setNewsData(selectedNews ? [selectedNews] : []);
    });
  }, [id]);

  return (
    <div>
      {newsData.map((article, index) => (
        <div
          key={index}
          className="p-8 bg-white shadow-md rounded-lg overflow-hidden my-8"
        >
          <img
            src={article.thumbnail}
            alt="Thumbnail"
            className="w-full h-56 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <p className="text-gray-600 text-sm">{`Published on: ${article.date}`}</p>
            <p className="text-gray-800 mt-4">{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsArticle;
