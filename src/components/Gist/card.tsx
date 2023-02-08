import { GistType } from "@/networking/types";
import { Button, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

type Props = {
  gist: GistType;
};

export const GistCard = ({ gist }: Props) => {
  const tags = React.useMemo(() => {
    if (!gist.files) {
      return [];
    }
    const languages = new Set(
      Object.values(gist.files)
        .filter(Boolean)
        .map((file) => file!.language)
    );
    return Array.from(languages);
  }, [gist]);

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>{gist.description}</Typography>
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} sx={{ mr: 1 }} />
        ))}
      </CardContent>
      <CardActions>
        {gist.html_url && (
          <Button size="small" href={gist.html_url} target="_blank">
            <GitHubIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
