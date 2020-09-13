import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import ArtistList from './artists/ArtistList';
import Selections from './Selections';
import ArtistChart from './artists/ArtistChart';

import { ArtistProvider } from '../contexts/ArtistContext';
import { SelectionsProvider } from '../contexts/SelectionsContext';
import { LoaderProvider } from '../contexts/LoaderContext';

const App = () => {
  return (
    <div>
      <Header />
      <div className="ui container">
        <ArtistProvider>
          <LoaderProvider>
            <SearchBar />
            <SelectionsProvider>
              <ArtistList />
              <Selections />
              <ArtistChart />
            </SelectionsProvider>
          </LoaderProvider>
        </ArtistProvider>
      </div>
    </div>
  );
};

export default App;