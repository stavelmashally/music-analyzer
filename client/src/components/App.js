import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import ArtistList from './artists/ArtistList';
import SelectionList from './SelectionList';
import ArtistChart from './charts/ArtistChart';
import AppInfo from './AppInfo';

import { ArtistProvider } from '../contexts/artists/ArtistContext';
import { SelectionsProvider } from '../contexts/selections/SelectionsContext';

const App = () => {
  return (
    <>
      <Header />
      <div className="ui container">
          <ArtistProvider>
            <SearchBar />
            <SelectionsProvider>
              <ArtistList />
              <SelectionList />
              <ArtistChart />
            </SelectionsProvider>
          </ArtistProvider>
        <AppInfo />
      </div>
    </>
  );
};

export default App;
