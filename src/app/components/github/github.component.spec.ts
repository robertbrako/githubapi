import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GitHubComponent } from './github.component';

describe('GitHubComponent', () => {
  let component: GitHubComponent;
  let fixture: ComponentFixture<GitHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ GitHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return userid', () => {
    const expr = '<https://api.github.com/users?since=30>; rel="next", <https://api.github.com/users{?since}>; rel="first"';
    expect(component.grepUserid(expr)).toEqual('30');
  });
});
