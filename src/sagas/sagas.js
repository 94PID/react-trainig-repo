import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as axios from "axios";


function* fetchNotes() {
    try {
        const notes = yield call(() => axios.get("https://jsonplaceholder.typicode.com/posts"), []);
        console.log(notes);
        yield put({type: "NOTE_FETCH_SUCCEEDED", notes: notes})
    } catch (e) {
        yield put({type: "NOTE_FETCH_FAILED", message: e.message})
    }
}

export default function* mySaga() {
    yield takeEvery("NOTE_FETCH_REQUESTED", fetchNotes);
}

export const actionCreator = () => {
    return {
        type: "NOTE_FETCH_REQUESTED"
    }
};
