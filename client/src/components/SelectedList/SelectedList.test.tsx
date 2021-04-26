import {cleanup, within} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {renderWithRedux} from 'tests/testUtils'
import artistsData from 'tests/data/artistsData.json'
import SelectedList from './index'

afterEach(cleanup)

test('should display selected & related artists', () => {
  const {getByRole} = renderWithRedux(<SelectedList />, {
    initialState: {app: {...artistsData}},
  })
  const list = getByRole('list')
  const items = within(list).getAllByRole('listitem')
  expect(items.length).toBe(4)
  expect(items[0]).toHaveTextContent(artistsData.selected[0].name)
})

test('should not display the selected list', () => {
  const {getByRole} = renderWithRedux(<SelectedList />, {
    initialState: {app: {selected: [], related: []}},
  })
  const list = getByRole('list')
  const items = within(list).queryAllByRole('listitem')
  expect(items.length).toBe(0)
})
