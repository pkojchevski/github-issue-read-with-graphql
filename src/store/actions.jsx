import { ActionTypes } from "./types";

export const loadDataStart = token => {
    return {
  type: ActionTypes.LOAD_START,
  payload: token
}};

export const loadDataSuccess = data => ({
  type: ActionTypes.LOAD_SUCCESS,
  payload: data
});

export const loadDataError = error => ({
  type: ActionTypes.LOAD_ERROR,
  payload: error
});


export const uploadTitleStart = data => {
  console.log('loadStart:', data)
      return {
    type: ActionTypes.UPLOAD_TITLE_CHANGE_START,
    payload: data
  }};
  
  export const uploadTitleSuccess = data => ({
    type: ActionTypes.UPLOAD_TITLE_CHANGE_SUCCESS,
    payload: data
  });
  
  export const uploadTitleError = error => ({
    type: ActionTypes.UPLOAD_TITLE_CHANGE_ERRORS,
    payload: error
  });


