import {AppProvider} from 'contexts/AppContext'
import Header from './Header'
import SearchBar from './SearchBar'
import SelectionList from './SelectionList'
import ChartSection from './charts/ChartSection'
import AppInfo from './AppInfo'
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
