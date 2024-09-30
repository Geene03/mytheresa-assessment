import axios from "axios";
import { Parser } from "json2csv";

interface GitHubUser {
  login: string;
}

interface GitHubPullRequest {
  title: string;
  created_at: string;
  user: GitHubUser;
}

export async function fetchAllOpenPullRequests(repo: string): Promise<GitHubPullRequest[]> {
  const apiBaseUrl = `https://api.github.com/repos/${repo}/pulls?state=open`;
  let openPullRequests: GitHubPullRequest[] = [];
  let currentPage = 1;
  const itemsPerPage = 100;
  const maxPagesToFetch = 10;

  try {
    while (currentPage <= maxPagesToFetch) {
      const requestUrl = `${apiBaseUrl}&page=${currentPage}&per_page=${itemsPerPage}`;
      const apiResponse = await axios.get<GitHubPullRequest[]>(requestUrl);

      // Stop if there are no more pull requests
      if (apiResponse.data.length === 0) break;

      openPullRequests = openPullRequests.concat(apiResponse.data);
      currentPage++;
    }

    return openPullRequests;
  } catch (error) {
    console.error(`Error fetching pull requests for ${repo}: ${error.message}`);
    throw new Error(`Failed to fetch all pull requests for ${repo}`);
  }
}

export function convertPullRequestsToCsv(prData: GitHubPullRequest[]): string {
  const fields = [
    { label: "Name", value: "title" },
    { label: "Created Date", value: "created_at" },
    { label: "Author", value: "user.login" },
  ];

  const csvData = prData.map((pr) => ({
    title: pr.title,
    created_at: pr.created_at,
    "user.login": pr.user.login,
  }));

  try {
    const parser = new Parser({ fields });
    return parser.parse(csvData);
  } catch (error) {
    console.error(`Error converting PR data to CSV: ${error.message}`);
    throw new Error("Failed to generate CSV");
  }
}
