import {spawn} from 'redux-saga/effects'
import dogGallerySaga from '../features/dogGallery/saga'

export default function* rootSaga() {
    yield spawn(dogGallerySaga);
};
