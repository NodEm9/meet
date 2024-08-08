import Event from './Event'

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      <h3>Events</h3>
      {events ? events.map(event => (
        <Event key={event.id} event={event} />
      )) : []}
      </ul> 
  ) 
}

export default EventList