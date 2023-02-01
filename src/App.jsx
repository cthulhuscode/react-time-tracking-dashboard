import { useSelector } from "react-redux";
import { Card, NavCard} from "./components/Cards";
import "./App.scss";

function App() {
  const hours = useSelector(state => state.time[state.time.freq]);     

  return <div className="App">
    <NavCard />
    { hours && hours.map(hour => <Card key={hour.category} hour={hour} />) }    
  </div>;
}

export default App;
