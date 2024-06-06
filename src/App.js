import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showVehicles } from "./actions";
function App() {
  const searchText = useSelector(state => state.searchText);
  const vehicleVisibility = useSelector(state => state.vehicleVisibility);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Search Text: {searchText}</h1>
      <button onClick={()=>{ dispatch(showVehicles())}}>Show Vehicles</button>
      {vehicleVisibility ? <h3>Vechicles</h3> : <h3>shh its hidden</h3>}
    </div>
  );
}

export default App;
