import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GithubService } from './github.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [GithubService],
})
export class AppModule {}
