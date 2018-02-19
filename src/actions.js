//const sqlite3 = require('sqlite3').verbose();
//let db = new sqlite3.Database(':memory:');

//let db = new sqlite3.Database('./database/herzberg.db');

/*
 * action types
 */

export const REQUEST_DATASETS = 'REQUEST_DATASETS';
export const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
export const TOGGLE_DATASET = 'TOGGLE_DATASET';


/*
 * action creators
 */


export function selectDataset(id) {
    return { type: TOGGLE_DATASET, id }
  }

export function requestDatasets() {
  return { type: REQUEST_DATASETS }
}

export function receiveDatasets( data ) {
    return { type: RECEIVE_DATASETS, data }
  }
  
//export function fetchDatasets() {
//    return dispatch => {
//      dispatch(requestDatasets())
//      return (
//        db.all("SELECT * FROM hplc ORDER BY id", (error, rows) => {
//          try{
//            console.log(rows);
//            dispatch(receiveDatasets(rows));
//          } catch (e) {
//            console.log(e)
//          }
//        })
//      )
//    }
//  }

