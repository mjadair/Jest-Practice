import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils'
import Input from './Input';


const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>)
}


test('Renders an input component', () => {

  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'input-component')
  expect(component.length).toBe(1)


})


test('does not throw a warning with expected props', () => {
  checkProps(Input, {secretWord: 'party'})
})