import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthRoutes } from "src/app/core";

@Component({
  selector: "app-qr-code",
  templateUrl: "./qr-code.component.html",
  styleUrls: ["./qr-code.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrCodeComponent implements OnInit {
  constructor(private router: Router) {}
  authRoutes = AuthRoutes;
  ngOnInit(): void {}
  routeToLoginPage() {
    this.router.navigate([this.authRoutes.login]);
  }
}
