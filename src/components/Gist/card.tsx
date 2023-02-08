import { Gist } from "@/networking/types";
import { Badge, Button, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import React from "react";

type Props = {
  gist: Gist;
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
          <Chip key={index} label={tag.name} sx={{ mr: 1 }} />
        ))}
      </CardContent>
      <CardActions>
        {gist.url && (
          <Button size="small" href={gist.url} target="_blank">
            <GitHubIcon />
          </Button>
        )}

        <Badge badgeContent={gist.comments.totalCount} color="primary">
          <ChatBubbleIcon />
        </Badge>
      </CardActions>
    </Card>
  );
};
