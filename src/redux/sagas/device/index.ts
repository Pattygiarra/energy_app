import { call, put, takeEvery } from "redux-saga/effects";
import { Device } from "../../../models/device.model";
import { GET_ALL_DEVICE } from "../../../utils/requests/deviceRequests";
import { prodAction } from "../../slices/product/product.slice";

function* deviceSagaWatcher(): any {
  yield takeEvery(prodAction.GET_ALL_REQUEST, deviceSagaWorker);
}

function* deviceSagaWorker() {
  try {
    const data: Promise<Device> = yield call(GET_ALL_DEVICE);
    yield put(prodAction.GET_ALL_SUCCESS(data));
  } catch (e) {
    yield put(prodAction.GET_ALL_FAILED({ error: "Error" }));
  }
}

export default [deviceSagaWatcher()];
