import { useGithubUser } from "@/stores/jotai";
import { GithubProfile } from ".";

export const GithubProfileJotai = (props: { className?: string }) => {
  const user = useGithubUser();

  return <GithubProfile className={props.className} user={user} />;
};
