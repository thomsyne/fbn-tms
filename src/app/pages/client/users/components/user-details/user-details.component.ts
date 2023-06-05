import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoaderComponent } from "src/app/shared/utility";
import { UserService } from "../../services/user.service";
import { User } from "../../model";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  userId: string = "";

  @ViewChild(LoaderComponent, { static: true }) loader: LoaderComponent;
  userInfo: User;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["userId"];
    this.getUser();
  }
  getUser() {
    this.loader.start();
    this.userService.getUserById(this.userId).subscribe((response) => {
      this.loader.end();
      this.userInfo = response;
      this.cd.detectChanges();
    });
  }
}
