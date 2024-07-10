import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { useGitHubUser } from "@/hooks/use-github-user";
import { GithubProfile } from ".";

export const GithubProfileMobx = observer((props: { className?: string }) => {
  const { githubSearch } = globalStore;
  const user = useGitHubUser(githubSearch);

  return <GithubProfile className={props.className} user={user} />;
});
