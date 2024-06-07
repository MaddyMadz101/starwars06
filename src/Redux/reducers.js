import {UPDATE_SEARCH_TERM , UPDATE_PEOPLE, UPDATE_PAGE, UPDATE_COUNT, UPDATE_VEHICLES,SET_VEHICLE_URL} from "./actionTypes"
const initialState = {
    people: [],
    searchTerm: "",
    page: 1,
    count: 0,
    result: 0
}
const peopleReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_TERM:
            return{
                people: state.people,
                searchTerm: action.payload.searchTerm,
                page: state.page,
                count: state.count,
                result: state.result
            }
            case UPDATE_PEOPLE:
            return{
                people: action.payload.people,
                searchTerm: state.searchTerm,
                page: state.page,
                count: state.count,
                result: state.result
            }
            case UPDATE_PAGE:
            return{
                people: state.people,
                searchTerm: state.searchTerm,
                page: action.payload.page,
                count: state.count,
                result: state.result
            }
            case UPDATE_COUNT:
            return{
                people: state.people,
                searchTerm: state.searchTerm,
                page: state.page,
                count: action.payload.count,
                result: state.result
            }
            case UPDATE_VEHICLES:
            return{
                people: state.people,
                searchTerm: state.searchTerm,
                page: state.page,
                count: state.count,
                vehicle: action.payload.vehicle
            }
            case SET_VEHICLE_URL:
            return{
                people: state.people,
                searchTerm: state.searchTerm,
                page: state.page,
                count: state.count,
                vehicle: action.payload.vehicle,
                vehicleUrl: action.payload.url
            }
        default:
            return state
    }
}

export default peopleReducer;