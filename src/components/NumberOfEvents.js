import { useState } from "react"
import PropTypes from 'prop-types'

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32)

  const handleInputChanged = (e) => {
    let value = e.target.value
    console.log('value', value)
    setNumber(value)
    setCurrentNOE(value)
  }

  return (
    <div id="numberOfevents">
      <label>Number of Events:</label>
      <input
        type="text"
        className="number"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  )
}

export default NumberOfEvents

NumberOfEvents.propTypes = {
  setCurrentNOE: PropTypes.func.isRequired
}