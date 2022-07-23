import { DefaultRootStateProps } from 'types';
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import axios from 'axios';
import { URLS } from 'store/constant';
import _ from 'lodash';
import { CreateSandwich, Sandwich, UpdateSandwich } from 'types/sandwhich';

const initialState: DefaultRootStateProps['sandwich'] = {
    error: null,
    meats: [],
    toppings: [],
    sandwiches: [],
};

const slice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload;
        },
        getMeatsSuccess(state, action) {
            state.meats = action.payload;
        },
        getToppingsSuccess(state, action) {
            state.toppings = action.payload;
        },
        getSandwichesSuccess(state, action) {
            state.sandwiches = action.payload;
        },
        createSandwichSuccess(state, action) {
            state.sandwiches.push(action.payload);
        },
        getSandwichSuccess(state, action) {
            if (!_.find(state.sandwiches, ['id', action.payload.data.id])) {
                state.sandwiches.push(action.payload.data);
            }
        },
        updateSandwichSuccess(state, action) {
            let sandwhich = _.find(state.sandwiches, ['id', action.payload.id]);
            if (sandwhich) {
                sandwhich = action.payload;
            } else {
                state.sandwiches.push(action.payload);
            }
        },
        deleteSandwichSuccess(state, action) {
            state.sandwiches = state.sandwiches.filter((sandwich: Sandwich) => action.payload !== sandwich.id);
        },
    },
});

export default slice.reducer;

export function getMeats() {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(URLS.MEATS());
            dispatch(slice.actions.getMeatsSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            return error;
        }
    };
}

export function getToppings() {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(URLS.TOPPINGS());
            dispatch(slice.actions.getToppingsSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            return error;
        }
    };
}

export function getSandwiches() {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(URLS.SANDWICHES());
            dispatch(slice.actions.getSandwichesSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            return error;
        }
    };
}

export function createSandwich(payload: CreateSandwich,) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post(URLS.SANDWICHES(), payload);
            dispatch(slice.actions.createSandwichSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            return error;
        }
    };
}

export function getSandwich(sandwichId: Sandwich['id']) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(URLS.SANDWICHES(sandwichId));
            dispatch(slice.actions.getSandwichSuccess(response));
            return response;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            throw error;
        }
    };
}

export function updateSandwich(sandwichId: Sandwich['id'], payload: UpdateSandwich) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.patch(URLS.SANDWICHES(sandwichId), payload);
            dispatch(slice.actions.updateSandwichSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            throw error;
        }
    };
}

export function deleteSandwich(sandwichId: Sandwich['id']) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.delete(URLS.SANDWICHES(sandwichId));
            dispatch(slice.actions.deleteSandwichSuccess(sandwichId));
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
            throw error;
        }
    };
}
