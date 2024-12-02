import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchSlides } from "../../api/fetchSlides";
import { actions } from "./reducers";
import { startup } from "../../../../shared/redux";
import { getCurrentSlide } from "./selectors";

function* fetchSlidesSaga() {
  yield put(actions.fetchSlides());

  const response: Awaited<ReturnType<typeof fetchSlides>> =
    yield call(fetchSlides);

  if (response.error) {
    yield put(actions.slidesLoadError());
    console.error(response.error); // In ideal world we should log this error to some error tracking service
    return;
  }

  yield put(actions.slidesLoaded(response.data));
}

function* showNextSlideWithDelay() {
  const currentSlide: ReturnType<typeof getCurrentSlide> =
    yield select(getCurrentSlide);
  if (!currentSlide) return;

  yield delay(currentSlide.duration * 1000);
  yield put(actions.nextSlide());
}

export const sagas = [
  takeLatest(startup, fetchSlidesSaga),
  takeLatest(actions.slideLoaded, showNextSlideWithDelay),
];
