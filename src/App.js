import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Navigation from './components/Navigation';
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
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents : allEvents.filter(event => event.location === currentCity)
    const currentEvents = filteredEvents.slice(0, currentNOE)
    setEvents(currentEvents);
    setAllLocations(extractLocations(allEvents));
  }


  return (
    <div className="App">
      <Navigation />
      <section className="search">
        <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
        <NumberOfEvents setCurrentNOE={setCurrentNOE} />
      </section>
      <EventList events={events} />
    </div>
  );
}

export default App;
