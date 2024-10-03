import { useEffect, useState } from "react";
import "./App.css";
import ArtDisplay from "./components/ArtDisplay";
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [art, setArt] = useState({data: []});

  const getArt = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&limit=32&fields=id,title,artist_display,image_id`
      );
      const data = await response.json();
      console.log(data);
      
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
      <h1>The Gallery</h1>
      <Search artSearch={getArt}/>
      <ArtDisplay art={art}/>
    </>
  );
}

export default App;
