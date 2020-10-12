import React from 'react'
import {AppProvider} from '../contexts/AppContext'
import {ArtistProvider} from '../contexts/ArtistContext'
import Header from './Header'
import SearchBar from './SearchBar'
import ArtistList from './artists/ArtistList'
import SelectionList from './SelectionList'
import ArtistChart from './charts/ArtistChart'
import AppInfo from './AppInfo'

const App = () => (
  <>
    <AppProvider>
      <Header />
      <div className="ui container">
        <ArtistProvider>
          <SearchBar />
          <ArtistList />
          <SelectionList />
          <ArtistChart />
        </ArtistProvider>
        <AppInfo />
      </div>
    </AppProvider>
  </>
)
export default App
