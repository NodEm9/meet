import { useState } from "react"
import PropTypes from 'prop-types'


const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <li className='event'>
      <span className='eventSummary'>
        <h2>{event.summary}</h2>  
      <p>{event.location}</p> 
      <p>{event.created}</p>
     </span>
      <button
        className='showDetailsButton' 
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails ? (
        <div className='details'>
          <h3>Event Details:</h3>
          <p>{event.description}</p>
          <a href={event.htmlLink}>See details on Google Calendar</a>
        </div>
      ) : null}
    </li>
  )
}

export default Event;

Event.propTypes = {
  event: PropTypes.object.isRequired
}
