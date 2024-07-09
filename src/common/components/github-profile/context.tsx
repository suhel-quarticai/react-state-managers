import { useGlobalContext } from "@/stores/context/use-context";
import { useGitHubUser } from "@/hooks/use-github-user";
import { GithubProfile } from ".";

export const GithubProfileContext = (props: { className?: string }) => {
  const { githubSearch } = useGlobalContext();
  const user = useGitHubUser(githubSearch);

  return <GithubProfile className={props.className} user={user} />;
};
