import { useEffect, useState } from "react";
import "./App.css";
import ArtDisplay from "./components/ArtDisplay";
import Search from "./components/Search";

function App() {
  const [art, setArt] = useState({data: []});

  const getArt = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}`
      );
      const data = await response.json();
      setArt(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getArt('');
  }, []);
  return (
    <>
      <h1>Art</h1>
      <Search artSearch={getArt}/>
      <ArtDisplay art={art}/>
    </>
  );
}

export default App;
