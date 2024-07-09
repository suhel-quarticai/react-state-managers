import { useGithubSearchStore } from "@/stores/zustand";
import { useGitHubUser } from "@/hooks/use-github-user";
import { GithubProfile } from ".";

export const GithubProfileZustand = (props: { className?: string }) => {
  const { githubSearch } = useGithubSearchStore();
  const user = useGitHubUser(githubSearch);

  return <GithubProfile className={props.className} user={user} />;
};
