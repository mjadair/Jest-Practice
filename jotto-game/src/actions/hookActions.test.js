import moxios from 'moxios';

import { getSecretWord } from './hookActions'


describe('moxios tests', () => {
beforeEach(() => {
  moxios.install()
})
 afterEach(() => {
   moxios.uninstall()
 })


test('calls the getSecretWord callback on axios respons', async () => {

  const secretWord = 'party'

  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: secretWord
    })
  })


// create mock for the callback argument

const mockSetSecretWord = jest.fn()


await getSecretWord(mockSetSecretWord)


//see whether the mock was run with the correct argument
expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord)



})

 
})