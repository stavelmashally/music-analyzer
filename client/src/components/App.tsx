import React from 'react'
import {AppProvider} from '../contexts/AppContext'

import Header from './Header'
import SearchBar from './SearchBar'
import ArtistList from './artists/ArtistList'
import SelectionList from './SelectionList'
import ChartSection from './charts/ChartSection'
import AppInfo from './AppInfo'

const App = () => (
  <>
    <AppProvider>
      <Header />
      <div className="ui container">
        <SearchBar />
        <ArtistList />
        <SelectionList />
        <ChartSection />
        <AppInfo />
      </div>
    </AppProvider>
  </>
)
export default App
