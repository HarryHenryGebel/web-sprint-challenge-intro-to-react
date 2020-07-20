import React, {useState, useEffect} from 'react';
import requester from 'easier-requests';
import './App.css';
import Character from './Character';
import {extractData} from './helpers';

function getCharacters(setCharacters) {
  // holds each new copy of character array
  let characters = [];

  async function _getCharacters(setCharacters,
                                page='http://swapi.dev/api/people/') {
    const id = requester.createUniqueID();
    await requester.get(page, id);

    const response = requester.response(id).data;

    const extractedResults = response.results.map(extractData);
    characters = [...characters].concat(extractedResults);
    setCharacters(characters);

    if (response.next)
      _getCharacters(setCharacters, response.next);
  }

  _getCharacters(setCharacters);
}

export default function App () {
  window.requester = requester;
  const [characters, setCharacters] = useState([]);

  useEffect(() => getCharacters(setCharacters), []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character) => <Character character={character}/>)}
    </div>
  );
}
