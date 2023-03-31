import axios from "axios";
import { DEV_ENV } from "../../environments/dev.env";
import { Device } from "../../models/device.model";

export const GET_ALL_DEVICE = () => {
  return axios
    .get<Device[]>(`${DEV_ENV.baseURL}/device/v1/list-devices`)
    .then((res) => {
      return res.data;
    });
};

export const GET_DEVICE_BY_ID = (id: number) => {
  return axios
    .get<Device>(`${DEV_ENV.baseURL}/device/v1/devices/${id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
