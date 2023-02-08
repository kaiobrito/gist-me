import { Gist } from "@/networking/types";
import { Badge, Button, CardHeader, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

import Avatar from "@mui/material/Avatar";

import React from "react";

type Props = {
  gist: Gist;
};

export const GistCard = ({ gist }: Props) => {
  const tags = React.useMemo(() => {
    if (!gist.files) {
      return [];
    }
    console.log({
      file: gist.files,
    });
    const languages = new Set(
      Object.values(gist.files ?? []).map((file) => file.language.name)
    );
    return Array.from(languages);
  }, [gist]);

  return (
    <Card>
      <CardHeader
        title={
          gist.description.length ? gist.description : gist.files?.[0].name
        }
        action={
          <Button size="small" href={gist.url} target="_blank">
            <GitHubIcon />
          </Button>
        }
      ></CardHeader>
      <CardContent>
        {gist.forks?.nodes?.map((fork, index) => (
          <Chip
            key={index}
            label={fork.owner.login}
            component="a"
            target={"_blank"}
            clickable
            href={fork.url}
            avatar={
              <Avatar alt={fork.owner.login} src={fork.owner.avatarUrl} />
            }
          />
        ))}
      </CardContent>
      <CardActions>
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} sx={{ mr: 1 }} />
        ))}
        <Badge badgeContent={gist.comments.totalCount} color="primary">
          <ChatBubbleIcon />
        </Badge>
      </CardActions>
    </Card>
  );
};
