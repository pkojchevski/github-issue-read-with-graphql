import { all, call, takeLatest, put } from "redux-saga/effects";
import { ActionTypes } from "./types";
import {graphql} from "@octokit/graphql";
import { getReposQuery, changeIssueTitle } from '../queries/queries'

import {
loadDataError,
loadDataSuccess,
uploadTitleSuccess,
uploadTitleError,
loadDataStart
} from "./actions";


export function* onLoadAsync({payload}) {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${payload}`,
      },
    });
    try {
      const result = yield graphqlWithAuth(getReposQuery);
      yield put(loadDataSuccess(result))
    } catch (error) {
      yield put(loadDataError(error));
    }
  }


export function* onLoad() {
  yield takeLatest(ActionTypes.LOAD_START, onLoadAsync);
}


export function* onUploadTitleAsync({payload}) {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${payload.token}`,
    },
  });
  try {
    const result = yield graphqlWithAuth({query:changeIssueTitle, id:payload.id, title:payload.title});
    yield put(uploadTitleSuccess(result))
    yield put(loadDataStart(payload.token))
  } catch (error) {
    yield put(uploadTitleError(error));
  }
}


export function* onUploadTitle() {
yield takeLatest(ActionTypes.UPLOAD_TITLE_CHANGE_START, onUploadTitleAsync);
}


export function* sagas() {
    yield all([call(onLoad), call(onUploadTitle)]);
  }