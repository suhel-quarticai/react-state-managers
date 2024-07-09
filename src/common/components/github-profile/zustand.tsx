import { useZustandStore } from "@/stores/zustand";
import { useGitHubUser } from "@/hooks/use-github-user";
import { GithubProfile } from ".";

export const GithubProfileZustand = (props: { className?: string }) => {
  const { githubSearch } = useZustandStore();
  const user = useGitHubUser(githubSearch);

  return <GithubProfile className={props.className} user={user} />;
};
