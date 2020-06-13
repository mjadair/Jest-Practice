import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })


test('renders app without crashing', () => {
  //checks our app component, and the test fails if it is unable to render
  const wrapper = shallow(<App />)
  //using debug returns our DOM as a string.
  console.log(wrapper.debug())


  expect(wrapper).toBeTruthy()


})