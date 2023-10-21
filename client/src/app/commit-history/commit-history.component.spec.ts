import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommitHistoryComponent} from './commit-history.component';
import {GithubService} from "../services/github.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

describe('CommitHistoryComponent', () => {
  let component: CommitHistoryComponent;
  let fixture: ComponentFixture<CommitHistoryComponent>;
  let githubService: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitHistoryComponent],
      providers: [GithubService],
      imports: [HttpClientTestingModule, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CommitHistoryComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default user and repository', () => {
    expect(component.user).toBe('kiranitor123');
    expect(component.repository).toBe('git-commit-v2');
  });

  it('should populate with the default values', () => {
    spyOn(githubService, 'getCommitHistory').and.returnValue(Promise.resolve([]));
    component.ngOnInit();
    expect(githubService.getCommitHistory).toHaveBeenCalledWith(component.user, component.repository);
  });

  it('should update data with the result of getCommitHistory', async () => {
    const mockData = [{commit: 'Commit 1'}, {commit: 'Commit 2'}];
    spyOn(githubService, 'getCommitHistory').and.returnValue(Promise.resolve(mockData));
    await component.searchCommits();
    expect(component.data).toEqual(mockData);
  });

  it('should handle error from getCommitHistory', async () => {
    spyOn(githubService, 'getCommitHistory').and.returnValue(Promise.reject('Error'));
    await component.searchCommits();
    expect(component.data).toEqual([]);
  });

});
