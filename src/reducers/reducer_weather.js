import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // concat also returns a new array, so it won't actually mutate state
            // push mutates array so don't use that.
            return [ action.payload.data, ...state ];
    }
    return state;
}
