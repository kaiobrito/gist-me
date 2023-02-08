import { GistType } from "@/networking/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
  gist: GistType;
};

export const GistCard = ({ gist }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>{gist.description}</Typography>
      </CardContent>
    </Card>
  );
};
