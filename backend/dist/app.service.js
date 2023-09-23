"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
const common_1 = require("@nestjs/common");
const octokit_1 = require("octokit");
let GithubService = class GithubService {
    constructor() {
        this.octokit = new octokit_1.Octokit({
            auth: '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',
        });
    }
    async getRepositories(owner, repo) {
        const response = await this.octokit.request(`GET /repos/{owner}/{repo}`, {
            owner,
            repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
        return response.data;
    }
    async getCommits(owner, repo) {
        const response = await this.octokit.request(`GET /repos/{owner}/{repo}/commits`, {
            owner,
            repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
        return response.data;
    }
};
exports.GithubService = GithubService;
exports.GithubService = GithubService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GithubService);
//# sourceMappingURL=app.service.js.map