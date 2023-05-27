import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { UserDetails, StorageService, LoggedInUserObject } from "src/app/core";
import { AuthService } from "src/app/core/access-control/auth.service";

@Component({
  selector: "lib-top-navigation",
  templateUrl: "./top-navigation.component.html",
  styleUrls: ["./top-navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationComponent implements OnInit, OnDestroy {
  initials: string;
  user: LoggedInUserObject;
  subscriptions: Subscription[] = [];

  // @Input() user: string;
  @Input() links: any;

  @Output() clickLink = new EventEmitter();
  @Output() toggleHamburger = new EventEmitter();

  constructor(
    private authService: AuthService,
    private changeDetector: ChangeDetectorRef,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    window.onbeforeunload = () => this.ngOnDestroy();

    this.subscriptions.push(
      this.storageService.userData$.subscribe((user) => {
        this.user = user;

        const names = `${this.user.fullname}`.split(" ");

        if (names.length > 1) {
          this.initials = `${names[0][0]}${names[1][0]}`.toUpperCase();
        } else {
          this.initials = `${names[0][0]}`.toUpperCase();
        }
        this.changeDetector.markForCheck();
      })
    );
  }

  linkClicked(linkName: string) {
    this.clickLink.emit(linkName);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((e) => e.unsubscribe());
  }
}
