import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes, AuthRoutes } from "src/app/core";

@Component({
  selector: "app-email-verification",
  templateUrl: "./email-verification.component.html",
  styleUrls: ["./email-verification.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailVerificationComponent implements OnInit {
  authRoutes = AuthRoutes;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  error: boolean = false;
  routeToQrPage() {
    this.router.navigate([this.authRoutes.qrPage]);
  }
}
