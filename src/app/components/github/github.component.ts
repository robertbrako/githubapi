import { Component, OnInit } from '@angular/core';
import { GHService } from '../../services/github.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GHService]
})
export class GitHubComponent implements OnInit {
  githubUsers = [];
  userid: string;

  constructor(private ghService:GHService, private router: Router) {
  }

  ngOnInit() {
    this.onNextClick();
  }

  onResetClick() {
    this.userid = '';
    this.onNextClick();
  }

  onNextClick() {
    this.fetchUsers(this.userid);
  }

  fetchUsers(id) {
    const param = {
      userid: id
    };
    this.ghService.getUsers(param).subscribe((res:any) => {
      this.userid = this.grepUserid(res.headers.link);
      this.githubUsers = res.body;
    }, (err:any) => console.log(err));
  }

  grepUserid(link: string) {
    return link.replace(/.*since=(\d+).*/, '$1');
  }

  doClick(user: any) {
    this.router.navigate(['/users'], { queryParams: user, skipLocationChange:true})
  }
}
