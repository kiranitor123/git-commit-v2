import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('api/v1')
export class AppController {
  constructor(private githubService: GithubService) {}

  @Get('commit-history/:username/:repository')
  async getCommitHistory(
    @Param('username') username: string,
    @Param('repository') repository: string,
  ) {
    return this.githubService.getCommitHistory(username, repository);
  }
}
