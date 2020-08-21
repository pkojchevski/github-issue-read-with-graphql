import { ActionTypes } from "./types";
import { converGitHubData } from "../utilities/utilitities";

const INITIAL_STATE = {
isFetching:false,
data:null,
error:null,
token:null
};

export const reducer = (reposData = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_START:
      return {
        ...reposData,
        isFetching: true,
        token:action.payload
      };
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...reposData,
        isFetching: false,
        data:converGitHubData(action.payload),
        error:null
      };
    case ActionTypes.LOAD_ERROR:
      return {
        ...reposData,
        error: action.payload,
        isFetching: false,
      };
      case ActionTypes.UPLOAD_TITLE_CHANGE_START:
        return {
          ...reposData,
          isFetching: true
        };
      case ActionTypes.UPLOAD_TITLE_CHANGE_SUCCESS:
        return {
          ...reposData,
          isFetching: false,
          error:null
        };
      case ActionTypes.UPLOAD_TITLE_CHANGE_ERROR:
        return {
          ...reposData,
          error: action.payload,
          isFetching: false,
        };

    default:
      return reposData;
  }
};