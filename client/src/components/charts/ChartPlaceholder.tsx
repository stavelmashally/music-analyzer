import {useApp} from 'contexts/AppContext'

const ChartPlaceholder = () => {
  const {theme} = useApp()

  return (
    <div className={`ui icon ${theme === 'dark' ? 'grey' : ''} header`}>
      <i className="search icon" style={{marginBottom: '20px'}}></i>
      Search for artists to make a comparison
    </div>
  )
}

export default ChartPlaceholder
