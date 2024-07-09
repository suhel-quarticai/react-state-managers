import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GithubError, getGithubUser, type GithubUser } from "@/utils/api";
import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const GithubProfile = (props: {
  className?: string;
  username: string;
}) => {
  const [user, setUser] = useState<GithubUser | GithubError | null>(null);

  useEffect(() => {
    if (!props.username) {
      setUser(null);
      return;
    }

    getGithubUser(props.username).then(setUser);
  }, [props.username]);

  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[2], props.className)}
    >
      <p className="text-lg font-medium">Github Profile</p>

      {user ? (
        user.type === "error" ? (
          user.message
        ) : (
          <GithubUser user={user} />
        )
      ) : (
        <>Start typing in the input box</>
      )}
    </Card>
  );
};

const GithubUser = (props: { user: GithubUser }) => (
  <div className="flex gap-8">
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={props.user.avatar_url} />
        <AvatarFallback>{props.user.name?.charAt(0)}</AvatarFallback>
      </Avatar>

      <span className="flex flex-col">
        <span>{props.user.name}</span>
        <span className="text-sm">
          Created at: {new Date(props.user.created_at).toDateString()}
        </span>
      </span>
    </div>

    <div className="flex flex-col">
      <span>Public repos: {props.user.public_repos}</span>
      <span>Followers: {props.user.followers}</span>
    </div>
  </div>
);
