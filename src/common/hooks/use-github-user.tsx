import { useState, useEffect } from "react";
import { getGithubUser, GithubError, GithubUser } from "@/utils/api";

export const useGitHubUser = (username: string) => {
  const [user, setUser] = useState<GithubUser | GithubError | null>(null);

  useEffect(() => {
    if (!username) {
      setUser(null);
      return;
    }

    // debounce the request
    const timeout = setTimeout(() => {
      getGithubUser(username).then(setUser);
    }, 500);

    return () => clearTimeout(timeout);
  }, [username]);

  return user;
};
