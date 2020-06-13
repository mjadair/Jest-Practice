import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';


// this is just to let enzyme know we are using React 16
Enzyme.configure({ adapter: new EnzymeAdapter() })


test('renders app without error', () => {
  //shallow function checks our app component, and the test fails if it is unable to render
  
  //using debug returns our DOM as a string.
  // console.log(wrapper.debug())
  // expect(wrapper).toBeTruthy()
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})



test('renders an increment button', () => {

})


test('renders counter display', () => {

})


test('counter starts at 0', () => {

})

test('clicking button increments counter', () => {

})



