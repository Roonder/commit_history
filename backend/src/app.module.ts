import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubController } from './app.controller';
import { GithubService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GithubController],
  providers: [GithubService],
})
export class AppModule {}
