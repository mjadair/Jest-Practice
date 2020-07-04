import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils'
import Input from './Input';
import { isTSAnyKeyword } from '@babel/types';


const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />)
}


test('Renders an input component', () => {

  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'input-component')
  expect(component.length).toBe(1)


})


test('does not throw a warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' })
})



describe('state controlled input field', () => {

  test('state updates with value of input box on change', () => {
    const mockSetCurrentGuess = jest.fn()
    //we're replacing the useState function in the actual component with a jest mock Function, which returns the initial string that state is set in and then the mockFunction that useState returns.
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])


    const wrapper = setup()
    const inputBox = findByTestAttr(wrapper, 'input-box')

    //these two lines simulate the inputBox being given a value of train
    const mockEvent = { target: { value: 'train'} }
    inputBox.simulate("change", mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')


  })



})