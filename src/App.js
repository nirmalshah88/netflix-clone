import React, { useState, useEffect } from "react";

import LoadingScreen from "./LoadingScreen";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";

import requests from "./requests";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="app">
          <Nav />
          <Banner fetchUrl={requests.fetchNetflixOriginals} />
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
