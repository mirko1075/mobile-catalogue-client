// app.test.js
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Routes} from 'react-router-dom'

import '@testing-library/jest-dom'

import {App, LocationDisplay} from './app'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Routes history={history}>
      <App />
    </Routes>,
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Phone catalogue/i)).toBeInTheDocument()

  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/PhonesList/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/you are on the çPhones List page/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  render(
    <Routes history={history}>
      <App />
    </Routes>,
  )

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory()
  const route = '/PhonesList'
  history.push(route)
  render(
    <Routes history={history}>
      <LocationDisplay />
    </Routes>,
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})