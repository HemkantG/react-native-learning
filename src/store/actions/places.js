import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes'

export const addPlace = (place) => {
    return { type: ADD_PLACE, place: place }
}
export const deletePlace = (place) => {
    return { type: DELETE_PLACE, place: place }
}
export const selectPlace = (place) => {
    return { type: SELECT_PLACE, place: place }
}
export const deselectPlace = () => {
    return { type: DESELECT_PLACE }
}