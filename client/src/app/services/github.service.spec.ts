import {TestBed} from '@angular/core/testing';

import {GithubService} from './github.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('GithubService', () => {
  let service: GithubService;
  let httpTestingController: HttpTestingController;
  let url = 'http://localhost:3000/api/v1/commit-history/example-username/example-repo';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });

    service = TestBed.inject(GithubService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get commit history', () => {
    const username = 'example-username';
    const repository = 'example-repo';

    const expectedData = [
      {commit: 'Commit 1'},
      {commit: 'Commit 2'},
    ];

    service.getCommitHistory(username, repository).then((data) => {
      expect(data).toEqual(expectedData);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedData);
  });

  it('should handle error', () => {
    const username = 'example-username';
    const repository = 'example-repo';

    service.getCommitHistory(username, repository).then((data) => {
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    req.error(new ErrorEvent('Network error'));
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
