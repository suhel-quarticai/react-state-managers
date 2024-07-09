import { observer } from "mobx-react";
import { githubSearchStore } from "@/stores/mobx";
import { useGitHubUser } from "@/hooks/use-github-user";
import { GithubProfile } from ".";

export const GithubProfileMobx = observer((props: { className?: string }) => {
  const { githubSearch } = githubSearchStore;
  const user = useGitHubUser(githubSearch);

  return <GithubProfile className={props.className} user={user} />;
});
