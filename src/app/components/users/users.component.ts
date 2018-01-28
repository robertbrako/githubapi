import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GHService } from "../../services/github.service";

@Component({
  selector: 'app-about',
  templateUrl: './users.component.html',
  styleUrls: [],
  providers: [GHService]
})
export class UsersComponent implements OnInit {
  user: any;

  constructor(private ghService: GHService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.ghService.getUser(params).subscribe((res:any) => {
        res.login = params.login;
        this.user = res;
      });
    });
  }

  ngOnInit() {
  }

}
