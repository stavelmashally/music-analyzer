import {AppProvider} from 'context/AppContext'
import Header from './Header/Header'
import SearchBar from './SearchBar/SearchBar'
import SelectionList from './SelectedList/SelectionList'
import ChartSection from './Chart/ChartSection'
import AppInfo from './AppInfo/AppInfo'
import {AppContainer} from 'styles'

const App = () => (
  <>
    <AppProvider>
      <Header />
      <AppContainer>
        <SearchBar />
        <SelectionList />
        <ChartSection />
        <AppInfo />
      </AppContainer>
    </AppProvider>
  </>
)
export default App
