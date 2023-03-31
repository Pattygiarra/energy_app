import { all } from "redux-saga/effects";
import device from "./device/index";

export default function* () {
  yield all([...device]);
}
