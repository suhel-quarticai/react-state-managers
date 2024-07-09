import { useZustandStore } from "@/stores/zustand";
import { GithubProfile } from ".";

export const GithubProfileZustand = (props: { className?: string }) => {
  const { githubSearch } = useZustandStore();

  return <GithubProfile className={props.className} username={githubSearch} />;
};
