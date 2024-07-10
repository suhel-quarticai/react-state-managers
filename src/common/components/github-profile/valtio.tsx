import { useGithubSearchStore } from "@/stores/valtio";
import { useGitHubUser } from "@/hooks/use-github-user";
import { GithubProfile } from ".";

export const GithubProfileValtio = (props: { className?: string }) => {
  const { githubSearch } = useGithubSearchStore();
  const user = useGitHubUser(githubSearch);

  return <GithubProfile className={props.className} user={user} />;
};
