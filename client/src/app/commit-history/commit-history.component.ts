import {Component, OnInit} from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.scss']
})
export class CommitHistoryComponent implements OnInit {
  data: any[] = [];
  user: string = 'kiranitor123';
  repository: string = 'git-commit-v2';
  headers = ['Avatar', 'Date', 'Email', 'Commit', 'GitLink']

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.searchCommits();
  }

  searchCommits() {
    this.githubService.getCommitHistory(this.user, this.repository).then((value: any[]) => {
      this.data = value;
      console.log(this.data)
    }).catch(() => {
      // Prevent any error
      this.data = [];
    });
  }
}
