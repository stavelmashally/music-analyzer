import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import ArtistList from './artists/ArtistList';
import Selections from './Selections';

import { ArtistProvider } from '../contexts/ArtistContext';
import { SelectionsProvider } from '../contexts/SelectionsContext';

const App = () => {
  return (
    <div>
      <Header />
      <div className="ui container">
        <ArtistProvider>
          <SearchBar />
          <SelectionsProvider>
            <ArtistList />
            <Selections />
          </SelectionsProvider>
        </ArtistProvider>
      </div>
    </div>
  );
};

export default App;
