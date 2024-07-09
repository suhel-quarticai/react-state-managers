import { useGithubSearch } from "@/stores/recoil";
import { GithubProfile } from ".";

export const GithubProfileRecoil = (props: { className?: string }) => {
  const [githubSearch] = useGithubSearch();

  return <GithubProfile className={props.className} username={githubSearch} />;
};
