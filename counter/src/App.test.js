import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';


// this is just to let enzyme know we are using React 16
Enzyme.configure({ adapter: new EnzymeAdapter() })


// a function to create a shell wrapper for the app component
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) {
    wrapper.setState(state)
  }
  return wrapper
}



const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}


test('renders app without error', () => {
  //shallow function checks our app component, and the test fails if it is unable to render

  //using debug returns our DOM as a string.
  // console.log(wrapper.debug())
  // expect(wrapper).toBeTruthy()
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})



test('renders an increment button', () => {
  const wrapper = setup()
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1)

})


test('renders a decrement button', () => {
  const wrapper = setup()
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  expect(decrementButton.length).toBe(1)
})


test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)

})


test('counter starts at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)

})

test('clicking increment button increments counter', () => {
  const counter = 7
  const wrapper = setup(null, { counter })
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')
const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1)
})



test('clicking decrement button decrements counter', () => {
  const counter = 7
  const wrapper = setup(null, { counter })
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter - 1)
})



test('clicking decrement button when counter is zero throws an error', () => {
  const counter = 0
  const wrapper = setup(null, { counter })
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter)

})


