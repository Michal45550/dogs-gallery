import * as actions from "./actions";
import {call, put, takeLatest} from 'redux-saga/effects'
import * as api from "./api";

function* getAllBreeds() {
    yield put({type: actions.SET_LOADING});

    const data = yield call(api.getAllBreeds);

    yield put({type: actions.INIT_ALL_BREEDS, payload: data});
}

function* getDogImage({payload}) {
    yield put({type: actions.SET_LOADING});

    const image = yield call(api.getDogImage, payload);

    yield put({type: actions.ADD_DOG_IMG, payload: {breed: payload, image}});
}

export default function* Sagas() {
    yield takeLatest(actions.GET_BREEDS_REQUEST, getAllBreeds)
    yield takeLatest(actions.ADD_DOG_IMG_REQUEST, getDogImage)
}
