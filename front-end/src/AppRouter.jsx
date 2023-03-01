import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importing pages
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

//Importing components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:mediaType/:id" element={<Details/>} />
            <Route path="/search/:query" element={<SearchResult/>} />
            <Route path="/explore/:mediaType" element={<Explore/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default AppRouter;