import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsContextProvider } from "../contexts/NewsContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import EventPage from "./pages/Events";
import AboutUs from "./pages/about/About";
import InfoPage from "./pages/Info";
import DocumentsPage from "./pages/Documents";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import NewsPage from "./pages/newsPage/News";
import NewsArticle from "./pages/newsPage/NewsArticle ";

const API_BASE_URL = "http://localhost:3000";

const App = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNewsItems, setFilteredNewsItems] = useState([]);

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/news`);
      setNewsItems(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [newsItems, searchQuery]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredNewsItems(filteredNews);
    } else {
      setFilteredNewsItems(newsItems);
    }
  }, [filteredNews, newsItems, searchQuery]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <NewsContextProvider
      value={{
        newsItems,
        setNewsItems,
        isLoading,
        setLoading,
        fetchNews,
        setSearchQuery,
        searchQuery,
        filteredNewsItems,
        setFilteredNewsItems,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route
            path="news"
            element={<NewsPage key={filteredNewsItems.length} />}
          />
          <Route path="news/:id" element={<NewsArticle />} />
          <Route path="events" element={<EventPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="informations" element={<InfoPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </NewsContextProvider>
  );
};

export default App;
