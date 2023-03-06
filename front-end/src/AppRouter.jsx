import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing pages
import Home from "./pages/home/Home";
const Details = lazy(() => import("./pages/details/Details"));
const SearchResult = lazy(() => import("./pages/searchResult/SearchResult"));
const Explore = lazy(() => import("./pages/explore/Explore"));
const PageNotFound = lazy(() => import("./pages/404/PageNotFound"));

//Importing components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:mediaType/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <Details />
            </Suspense>
          }
        />
        <Route
          path="/search/:query"
          element={
            <Suspense fallback={<Spinner />}>
              <SearchResult />
            </Suspense>
          }
        />
        <Route
          path="/explore/:mediaType"
          element={
            <Suspense fallback={<Spinner />}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
