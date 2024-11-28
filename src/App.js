import React from 'react'
import './App.css';
import Row from './Row';
import Banner from './Banner'
import request from './request';
function App() {
  return (
    <div className="App">
      {/* nav */}
      <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top rated " fetchUrl={request.fetchTrending} />
      <Row title="Action movies " fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy movie " fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror movie " fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance movie " fetchUrl={request.fetchRomanceMovies} />
      <Row title=" Documentries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default App;
