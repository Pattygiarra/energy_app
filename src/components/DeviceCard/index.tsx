import React, { useState } from "react";
import { Device } from "../../models/device.model";
import { Card } from "primereact/card";
import Timer from "../../ui/Timer";

type DEVICE_CARD_PROPS = {
  data?: Device;
};

const DeviceCard: React.FC<DEVICE_CARD_PROPS> = ({ data }) => {
  return (
    <>
      <Card title={data?.name} footer={<button>Nuovo utilizzo</button>}>
        <p>Data utilizzo: {data?.date}</p>
        <p>Costo consumo: {data?.expenses}</p>
        <p>Consumi reali: {data?.consumes}kw</p>
        <p>Consumo orario: {data?.kw}kwh</p>
      </Card>
    </>
  );
};

export default DeviceCard;
