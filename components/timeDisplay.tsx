import Millisecond from "../models/millisecond";

const TimeDisplay: React.FunctionComponent<{ time: Millisecond }> = ({ time }) => {
  return (
    <>
      {time.formatted()}
    </>
  )
}

export default TimeDisplay;
