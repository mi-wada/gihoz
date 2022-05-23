import Milliseconds from "../models/milliseconds";

type TimeDisplayProps = {
  time: Milliseconds
};

const TimeDisplay: React.FunctionComponent<TimeDisplayProps> = ({ time }) => {
  return (
    <>
      {time.formatted()}
    </>
  )
}

export default TimeDisplay;
