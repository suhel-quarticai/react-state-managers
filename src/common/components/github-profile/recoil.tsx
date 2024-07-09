import { useGithubUser } from "@/stores/recoil";
import { GithubProfile } from ".";

export const GithubProfileRecoil = (props: { className?: string }) => {
  const user = useGithubUser();

  return <GithubProfile className={props.className} user={user} />;
};
