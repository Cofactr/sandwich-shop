import { combineReducers } from 'redux';

import sandwichReducer from './slices/sandwich';


const reducer = combineReducers({
    sandwich: sandwichReducer,
});

export default reducer;
