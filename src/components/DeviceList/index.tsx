import { useSelector } from "react-redux";
import { Device } from "../../models/device.model";
import { RootState } from "../../redux/store";
import { GridContainer } from "../../ui/GridContainer/style";
import DeviceCard from "../DeviceCard";

const DeviceList = () => {
  const data: Device[] = useSelector((state: RootState) => state.products);
  return (
    <>
      <h1>I tuoi dispositivi</h1>
      <GridContainer>
        {data.map((item: Device) => {
          return <DeviceCard data={item} key={item.id} />;
        })}
      </GridContainer>
    </>
  );
};

export default DeviceList;
