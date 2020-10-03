import React from 'react';
import { AppProvider, ArtistProvider, SelectionsProvider } from '../contexts';
import Header from './Header';
import SearchBar from './SearchBar';
import ArtistList from './artists/ArtistList';
import SelectionList from './SelectionList';
import ArtistChart from './charts/ArtistChart';
import AppInfo from './AppInfo';

const App = () => (
  <>
    <AppProvider>
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
    </AppProvider>
  </>
);
export default App;
