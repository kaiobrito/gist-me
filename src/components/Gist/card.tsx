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
      />
      <CardContent>
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} sx={{ mr: 1 }} />
        ))}
        {(gist.forks?.nodes?.length || 0) > 0 && (
          <Typography variant="h6">Recent forks</Typography>
        )}
        {gist.forks?.nodes?.map((fork, index) => (
          <Chip
            key={index}
            label={fork.owner.login}
            component="a"
            target={"_blank"}
            clickable
            href={fork.url}
            sx={{ mr: 1 }}
            avatar={
              <Avatar alt={fork.owner.login} src={fork.owner.avatarUrl} />
            }
          />
        ))}
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", pr: 4 }}>
        <Badge badgeContent={gist.comments.totalCount} color="primary">
          <ChatBubbleIcon />
        </Badge>
      </CardActions>
    </Card>
  );
};
