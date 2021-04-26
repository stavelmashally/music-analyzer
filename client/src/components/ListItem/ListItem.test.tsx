import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import artistsData from 'tests/data/artistsData.json'
import ListItem from './index'

afterEach(cleanup)

test('clicking the ListItem calls onItemSelected with artist id', () => {
  const onItemSelected = jest.fn()
  const {id, name} = artistsData.selected[0]
  const {getByRole} = render(
    <ListItem itemId={id} content={name} onItemSelected={onItemSelected} />,
  )
  fireEvent.click(getByRole('listitem'))
  expect(onItemSelected).toBeCalledTimes(1)
  expect(onItemSelected).toBeCalledWith(id)
})
