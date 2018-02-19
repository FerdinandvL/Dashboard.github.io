import { combineReducers } from 'redux';
import { TOGGLE_DATASET, toggleDataset, RECEIVE_DATASETS, receiveDatasets, REQUEST_DATASETS, requestDatasets } from './actions';

const initialState = {
    data: [],
    isFetching: false,
}

function fetchIndicating(state = initialState.isFetching, action) {
    switch(action.type){
        case REQUEST_DATASETS:
            return Object.assign({}, state, {
                isFetching: true,
                }
            );
        case RECEIVE_DATASETS:
            return Object.assign({}, state, {
                isFetching: false,
                }
            );
        default:
            return state;
    }
}

function dataStorage(state = initialState.data, action) {
    switch(action.type){
        case RECEIVE_DATASETS:
            const receivedData = action.data.map((element, index) => {
                return {
                    ...element,
                    selected: false
                }
            });
            return Object.assign({}, state, {
                data: receivedData,
                }
            );
        case TOGGLE_DATASET:
            const toggledData = state.data.map((element, index) => {
                if(element.id === action.id){
                    return {
                        ...element,
                        selected: !element.selected,
                    }
                } else { 
                    return element;
                }
            });
            return Object.assign({}, state, {
                data: toggledData,
                }
            );
        default:
            return state;
    }
}

export const dashboardApp = combineReducers({
    fetchIndicating,
    dataStorage,
})