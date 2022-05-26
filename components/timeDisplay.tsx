import { Typography } from "@mui/material";
import Milliseconds from "../models/milliseconds";

type TimeDisplayProps = {
  ms: Milliseconds
};

const TimeDisplay: React.FunctionComponent<TimeDisplayProps> = ({ ms }) => {
  return (
    <Typography variant='h3'>
      { ms.formatted() }
    </Typography>
  )
}

export default TimeDisplay;
