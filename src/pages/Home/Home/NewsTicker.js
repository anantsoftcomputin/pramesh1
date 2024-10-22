import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsCard = ({ title, description, url }) => (
  <div className="bg-white p-4 rounded-lg shadow-md min-w-[300px] max-w-[300px] mr-4">
    <h3 className="font-semibold mb-2 truncate">{title}</h3>
    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary-500 text-sm hover:underline">
      Read more
    </a>
  </div>
);

const NewsTicker = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_569373a6c80e7f47d4c740f75d99954998e50 ', {
          params: {
            apikey: 'pub_2680473190c3e8a72c15c79f9cd99bd28d7d2', // Replace with your Newsdata.io API key
            country: 'in',
            category: 'business',
            language: 'en'
          }
        });
        if (response.data.results && response.data.results.length > 0) {
          setNews(response.data.results);
        } else {
          setError('No news articles found');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <div className="text-center py-4">Loading news...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-primary-100 py-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">Financial News</h2>
        <div className="overflow-x-hidden">
          <div className="flex animate-ticker" style={{ animationDuration: '60s' }}>
            {news.map((item, index) => (
              <NewsCard 
                key={index}
                title={item.title}
                description={item.description}
                url={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;