// src/api.ts

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  bio?: string;
  location?: string;
}

const GITHUB_API_URL = 'https://api.github.com/users';

/**
 * Fetches GitHub user profile by username
 * @param username - GitHub username
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`${GITHUB_API_URL}/${username}`);

  if (!res.ok) {
    throw new Error(`User "${username}" not found`);
  }

  const data = await res.json();
  return {
    login: data.login,
    avatar_url: data.avatar_url,
    html_url: data.html_url,
    name: data.name,
    bio: data.bio,
    location: data.location,
  };
}
