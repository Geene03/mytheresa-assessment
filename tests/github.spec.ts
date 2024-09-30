import { test, expect } from "@playwright/test";
import { fetchAllOpenPullRequests, convertPullRequestsToCsv } from "../utils/githubPullRequestUtils";
import * as fs from "fs";
import * as path from "path";

test.describe("TC4: Open Pull Requests", () => {
  test("should fetch open pull requests and output in CSV format", async () => {
    const repository = process.env.GITHUB_REPO;
    if (!repository) {
      throw new Error("GITHUB_REPO environment variable is not defined.");
    }

    const openPullRequests = await fetchAllOpenPullRequests(repository);
    const csvOutput = convertPullRequestsToCsv(openPullRequests);
    const outputDirectory = path.resolve(__dirname, "../open_pull_requests_report");
    const csvFilePath = path.resolve(outputDirectory, "open_pull_requests.csv");

    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory, { recursive: true });
    }

    fs.writeFileSync(csvFilePath, csvOutput, "utf8");
    console.log(`CSV file saved at: ${csvFilePath}`);

    expect(openPullRequests.length).toBeGreaterThan(0);
  });
});
