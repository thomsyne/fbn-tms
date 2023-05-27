import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoggedInUserObject, UserDetails } from '../model';
import { StorageService } from '../services';
import { map } from 'rxjs';

@Directive({
  selector: '[appPermission]'
})
export class PermissionsDirective {

  private currentUser: LoggedInUserObject;
  private permissions: string[] = [];
  private logicalOp = "AND";
  private isHidden = true;

  constructor(
    private storageService: StorageService,
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.updateView();
    this.storageService.userData$
      .pipe(map((user) => user))
      .subscribe((user) => {
        this.currentUser = user;
        this.updateView();
      });
  }

  @Input()
  set appPermission(val: string[]) {
    this.permissions = val;
    this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;

    if (this.currentUser && this.currentUser.userPermissionList) {

      for (const checkPermission of this.permissions) {
        const permissionFound = this.currentUser.userPermissionList.map((x) => x.code).find(
          (x) => x.toUpperCase() === checkPermission.toUpperCase()
        );

        if (permissionFound) {
          hasPermission = true;

          if (this.logicalOp === "OR") {
            break;
          }
        } else {
          hasPermission = false;
          if (this.logicalOp === "AND") {
            break;
          }
        }
      }
    }

    return hasPermission;
  }

}
