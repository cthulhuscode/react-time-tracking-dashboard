import { useState } from "react";
import { useSelector } from "react-redux";
import { Card, NavCard} from "./components/Cards";
import { getHours } from "./store/slices/timeSlice";
import "./App.scss";



function App() {
  const hours = useSelector(state => state.time[state.time.freq]);   

  console.log(hours)

  return <div className="App">
    <NavCard />
    { hours && hours.map(hour => <Card key={hour.category} hour={hour} />) }    
  </div>;
}

export default App;
