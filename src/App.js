import './App.css';
import Search from './components/Search';
import Gallery from './components/gallery';
import { useState, useEffect} from 'react';

const imageTexts = [
  "Primera imagen",
  "Segunda imagen",
  "Tercera imagen",
  "Cuarta imagen",
  "Quinta imagen",
  "Sexta imagen"
];

function App() {

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const results = imageTexts.filter((text) => {
      return searchText.trim() === "" || text.toLowerCase().includes(searchText);
    })
    setSearchResult(results);
  },[searchText]);

  const onChangeHandler = (event) => {
    setSearchText(event.target.value);
  }
  return (
    <div>
      <Search changeHandler={onChangeHandler} searchText={searchText}></Search>
      <Gallery results={searchResult}></Gallery>
    </div>
  );
}

export default App;
