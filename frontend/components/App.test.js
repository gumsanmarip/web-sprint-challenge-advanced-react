import React from 'react';
import { render, fireEvent, screen} from '@react-testing-library';
import '@testing-library/jest-dom/extend-expect';
import AppClass from './AppClass'

let leftBtn, submitBtn, emailInput

beforeEach(() => {
  render(<AppClass />)
    leftBtn = screen.queryByText('left limit');
    submitBtn = screen.queryByText('submit email');
    emailInput = screen.queryByPlaceholderText('type email');
})
afterEach(() => {
  document.body.innerHTML = '';
})
test('sanity', () => {
  expect(true).toBe(false)
})
test('Left button renders error at left most side', () => {
  fireEvent.click(leftBtn)
  screen.getByText("You can't go left")
})
test('Submit button works', () => {
  fireEvent.click(submitBtn)
  screen.getByText("Submit email")
})
test('Input is email', () => {
  fireEvent.change(emailInput, {target: {value: 'a'} })
  screen.getByText("Type email")
})

  // - From inside the test file, import a component of your choosing, either `AppClass.js` or `AppFunctional.js`.
  // - Test that the visible texts in headings, buttons, links... render on the screen.
  // - Test that typing on the input results in its value changing to the entered text.
