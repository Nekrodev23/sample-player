import { all } from "redux-saga/effects";
import { sagas as slides } from "../../../entities/slide/model";

export function* rootSaga() {
  yield all([...slides]);
}
