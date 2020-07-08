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

  let mockSetCurrentGuess = jest.fn()
  let wrapper

  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    //we're replacing the useState function in the actual component with a jest mock Function, which returns the initial string that state is set in and then the mockFunction that useState returns.
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])
    wrapper = setup()


  })

  test('state updates with value of input box on change', () => {

    const inputBox = findByTestAttr(wrapper, 'input-box')

    //these two lines simulate the inputBox being given a value of train
    const mockEvent = { target: { value: 'train' } }
    inputBox.simulate("change", mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')


  })


  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')

    //we  have prevent default passed as an argument in the simulated function 
    // this is because we need it in actuality on the front-end, so it's an empty function in the test to acknowledge this
    submitButton.simulate('click', { preventDefault() {}})
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
  })



})