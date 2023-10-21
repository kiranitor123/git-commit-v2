import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  async getCommitHistory(username: string, repository: string) {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${username}/${repository}/commits`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch commit history');
    }
  }
}
