import { combineReducers } from 'redux';
import { TOGGLE_DATASET, toggleDataset, RECEIVE_DATASETS, receiveDatasets, REQUEST_DATASETS, requestDatasets } from './actions';

const initialState = {
    data: [],
    isFetching: false,
}

function requestData(state = initialState, action) {
    switch(action.type){
        case REQUEST_DATASETS:
            return { ...state,
                isFetching: true,
                };
        default:
            return state;
    }
}

function receiveData(state = initialState, action) {
    switch(action.type){
        case RECEIVE_DATASETS:
            const newData = action.data.map((element, index) => {
                return {
                    ...element,
                    selected: false
                }
            });
            return {
                ...state,
                data: newData,
                isFetching: false,
            };
        default:
            return state;
    }
}

function toggleData(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_DATASET:
            const newData = state.data.map((element, index) => {
                if(element.id === action.id){
                    return {
                        ...element,
                        selected: !element.selected,
                    }
                } else { 
                    return element;
                }
            });
            return {
                ...state,
                data: newData,
            };
        default:
            return state;
    }
}


export const dashboardApp = combineReducers({
    requestData,
    receiveData,
    toggleData,
})