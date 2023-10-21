import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { GithubService } from './github.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [GithubService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getCommitHistory', () => {
    it('should return commit history', async () => {
      const username = 'kiranitor123';
      const repository = 'git-commit-v2';

      const result = await appController.getCommitHistory(username, repository);

      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    });

    it('should handle errors', async () => {
      const username = 'non-existing-user';
      const repository = 'non-existing-repo';

      try {
        await appController.getCommitHistory(username, repository);
      } catch (error) {
        expect(error.message).toBe('Failed to fetch commit history');
      }
    });
  });
});
