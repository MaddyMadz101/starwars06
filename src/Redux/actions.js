import { UPDATE_SEARCH_TERM, UPDATE_PEOPLE, UPDATE_PAGE, UPDATE_COUNT, UPDATE_VEHICLES, SET_VEHICLE_URL } from "./actionTypes";

export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload:  {searchTerm}
})
export const updatePeople = (people) => ({
    type: UPDATE_PEOPLE,
    payload:  {people}
})

export const updatePage = (page) => ({
    type: UPDATE_PAGE,
    payload:  {page}
})

export const updateCount = (count) => ({
    type: UPDATE_COUNT,
    payload:  {count}
})

export const updateVechicles = (vehicles) => ({
    type: UPDATE_VEHICLES,
    payload:  {vehicles}
})
export const updateVechicleURL = (url) => ({
    type: SET_VEHICLE_URL,
    payload:  {url}
})