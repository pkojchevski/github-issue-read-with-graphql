
import { createSelector } from "reselect";



export const selectData = state => state.data;
export const selectError = state => state.error;
export const selectIsFetching = state => state.isFetching;
export const selectToken = state => state.token;


export const selectCurrentData = createSelector(
  [selectData],
  data => data
);

export const selectCurrentErrors = createSelector([selectError], error => error);
export const selectCurrentIsFetching = createSelector([selectIsFetching], isFetching => isFetching);
export const selectCurrentToken = createSelector([selectToken], token => token);

