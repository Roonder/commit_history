import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './app.service';

@Controller()
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/repos/:owner/:repo')
  async getRepositories(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    return this.githubService.getRepositories(owner, repo);
  }

  @Get('/repos/:owner/:repo/commits')
  async getCommits(@Param('owner') owner: string, @Param('repo') repo: string) {
    return this.githubService.getCommits(owner, repo);
  }
}
