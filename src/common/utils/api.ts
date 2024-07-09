export type GithubUser = {
  type: "user";
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  message: undefined;
  created_at: string;
};

export type GithubError = {
  type: "error";
  message: string;
};

export const getGithubUser = async (username: string) => {
  if (!username) return null;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data.status === "404") {
      return { type: "error", message: "User not found" } as GithubError;
    }
    return { type: "user", ...data } as GithubUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};
