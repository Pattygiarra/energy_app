import { useEffect, useRef, useState } from "react";
import { TimerProps } from "./type";

const Timer: React.FC<TimerProps> = () => {
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  //reference to interval timers
  const secInterval: any = useRef();
  const minInterval: any = useRef();
  const hourInterval: any = useRef();

  useEffect(() => {
    if (isRunning) {
      secInterval.current = setInterval(() => {
        setSec((prevState) => {
          return prevState === 59 ? 0 : prevState + 1;
        });
      }, 1000);

      minInterval.current = setInterval(() => {
        setMin((prevState) => {
          return prevState === 59 ? 0 : prevState + 1;
        });
      }, 60000);

      hourInterval.current = setInterval(() => {
        setHour((prevState) => {
          return prevState === 24 ? 0 : prevState + 1;
        });
      }, 3600000);
    } else {
      clearInterval(secInterval.current);
      clearInterval(minInterval.current);
      clearInterval(hourInterval.current);
    }
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning((prevState) => !prevState);
  };

  const displayTime = (h: number, min: number, sec: number): string => {
    let hour: string = h < 10 ? `0${h}` : h.toString();
    let minutes: string = min < 10 ? `0${min}` : min.toString();
    let seconds: string = sec < 10 ? `0${sec}` : sec.toString();

    return `${hour}h ${minutes}min ${seconds}sec`;
  };

  const reset = () => {
    clearInterval(secInterval.current);
    clearInterval(minInterval.current);
    clearInterval(hourInterval.current);

    hourInterval.current = null;
    minInterval.current = null;
    secInterval.current = null;

    setHour(0);
    setMin(0);
    setSec(0);

    setIsRunning(false);
  };
  return (
    <div>
      <p>{displayTime(hour, min, sec)}</p>
      <button onClick={toggleTimer}>{!isRunning ? "Start" : "Stop"}</button>
      <button onClick={reset}>Clear</button>
    </div>
  );
};

export default Timer;
