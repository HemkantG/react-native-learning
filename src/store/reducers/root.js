import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initial_state = {
    places: [],
    selectedPlace: null
}
const reducer = (state = initial_state, action) => {

    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(
                    {
                        place: action.place,
                        image: {
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Magical_Forest.png'
                        }
                    })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(item => item.place != action.place),
                selectedPlace: null
            }

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(placeItem => placeItem.place === action.place)
            }

        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }

}

export default reducer;