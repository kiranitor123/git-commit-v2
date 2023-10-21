import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly baseUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {
  }

  getCommitHistory(username: string, repository: string) {
    const url = `${this.baseUrl}/commit-history/${username}/${repository}`;
    return firstValueFrom(this.http.get(url));
  }
}
