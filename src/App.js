import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';


import './App.css'; 

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);
   
  const fetchData = async () => {
    let eventsArray = [];
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities"
      ? await allEvents
      : allEvents.filter(event => event.location === currentCity);
    
    // filteredEvents.length = currentNOE;
    eventsArray = filteredEvents.slice(0, currentNOE);

    eventsArray.sort((a, b) => {
      return a.local_time > b.local_time ? 1 : -1;
    });

    console.log(filteredEvents);
    setEvents(eventsArray);
    setAllLocations(extractLocations(allEvents)); 
    console.log(allEvents); 
  };


  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE}  />
      <EventList events={events} />
    </div>
  );
}

export default App;
