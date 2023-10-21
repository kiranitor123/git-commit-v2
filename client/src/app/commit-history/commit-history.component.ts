import {Component} from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.scss']
})
export class CommitHistoryComponent {
  constructor(private githubService: GithubService) {
    this.githubService.getCommitHistory('kiranitor123', 'git-commit-v2').then(console.log)
  }
}
