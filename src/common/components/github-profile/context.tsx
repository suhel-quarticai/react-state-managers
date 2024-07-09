import { useGlobalContext } from "@/stores/context/use-context";
import { GithubProfile } from ".";

export const GithubProfileContext = (props: { className?: string }) => {
  const { githubSearch } = useGlobalContext();

  return <GithubProfile className={props.className} username={githubSearch} />;
};
