import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'
//* importing our find attribute function
import { findByTestAttr } from './test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })


// we configure our own setup function
//this initializes props as an empty object
//it then uses Enzyme's shallow method to render the component with its props, spread to return as key-value pairs
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)

}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})


test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')


})



test('renders non-empty congrats message when success', () => {
  const wrapper = setup({ success: true})
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})
