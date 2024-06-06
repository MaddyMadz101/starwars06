import searchText from "./search_text";
import vehicleVisibility from "./vehicle_visibility";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    searchText,
    vehicleVisibility
});

export default allReducers;