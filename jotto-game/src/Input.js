import React from 'react'

import PropTypes from 'prop-types'

const Input = ({ secretWord }) => {
const [ currentGuess, setCurrentGuess] = React.useState('')


  return <div data-test="input-component">

<form className="form-inline">


  <input data-test="input-box"
  className="mb-2 mx-sm-3"
  type="text"
  placeholder="enter guess"
  value={currentGuess}
  onChange={(event) => setCurrentGuess(event.target.value)}/>
  <button
  data-test="submit-button"
  className="btn btn-primary"
  >
    Submit
    </button>
  

</form>
  </div>

}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}



export default Input