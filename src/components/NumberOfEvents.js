import { useState } from "react"

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32)


  const handleInputChanged = (e) => { 
    const value = e.target.value

    if (e.target.value === '') {
      setNumber(0)
    } else {
      setNumber(e.target.value)
    } 

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