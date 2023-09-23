import { Module } from '@nestjs/common';
import { GithubController } from './app.controller';
import { GithubService } from './app.service';

@Module({
  imports: [],
  controllers: [GithubController],
  providers: [GithubService],
})
export class AppModule {}
