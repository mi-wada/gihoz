import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { COLORS } from "../constants";

type ToyProps = {
  readonly href: string,
  readonly title: string,
  readonly description: string,
}

const Toy = ({ title, href }: ToyProps) => {
  return (
    <Link href={href}>
      <Card sx={{ backgroundColor: COLORS.main, width: '180px', height: '180px' }}>
        <CardActionArea sx={{ width: '100%', height: '100%' }}>
          <CardContent>
            <Typography gutterBottom variant='h5' sx={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
};

export default Toy;
