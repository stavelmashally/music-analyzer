import {AppProvider} from 'context/AppContext'
import Header from 'components/Header'
import SearchBar from 'components/SearchBar'
import SelectionList from 'components/SelectedList'
import ChartSection from 'components/ChartSection'
import AppInfo from 'components/AppInfo'
import * as Styled from './styles'

const App = () => (
  <>
    <AppProvider>
      <Header />
      <Styled.Wrapper>
        <SearchBar />
        <SelectionList />
        <ChartSection />
        <AppInfo />
      </Styled.Wrapper>
    </AppProvider>
  </>
)

export default App
