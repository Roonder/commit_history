import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class GithubService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: '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',
    });
  }

  async getRepositories(owner: string, repo: string) {
    const response = await this.octokit.request(`GET /repos/{owner}/{repo}`, {
      owner,
      repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return response.data;
  }

  async getCommits(owner: string, repo: string) {
    const response = await this.octokit.request(
      `GET /repos/{owner}/{repo}/commits`,
      {
        owner,
        repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    return response.data;
  }
}
