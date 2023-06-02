import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppRoutes, BaseTableComponent } from "src/app/core";
import {
  FileGenerationService,
  PaginationService,
} from "src/app/shared/dynamic-table";
import { UserService } from "../../services/user.service";
import {
  downloadCSvheaders,
  filters,
  unverifiedUsersTableSettings,
} from "./unverified-users.constants";
import { map } from "rxjs";
import { BulkUpdateModel, OTPModel } from "src/app/shared/otp-verify/components";
import { AlertService } from "src/app/shared/utility";

@Component({
  selector: "app-unverified-users",
  templateUrl: "./unverified-users.component.html",
  styleUrls: ["./unverified-users.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnverifiedUsersComponent
  extends BaseTableComponent
  implements OnInit
{
  appRoutes = AppRoutes;

  showBulkUpdateModal: boolean;
  bulkAction: string = ''

  checkedList: any[] = [];
  checkedItems: any[] = []
  constructor(
    paginationService: PaginationService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fileService: FileGenerationService
  ) {
    super(paginationService);
    this.tableSettings = unverifiedUsersTableSettings;
    this.filters = filters;
    this.downloadCSvheaders = downloadCSvheaders;
    this.buttonSettings = [
      {
        title: "Open",
        params: ["id"],
        class: ["btn__sm", "btn", "btn-outline-primary"],
        func: (id) => {
          this.router.navigate([`/users/${id}/details`], {
            queryParams: {
              id: id,
            },
          });
        },
      },
    ];
  }

  ngOnInit() {}

  getUnverifiedUsers() {

    console.log(this.paginationValues)

    const { username } = this.filterValues;
    const response$ = this.userService.fetchUnverifiedUsers(
      this.paginationValues.pageIndex,
      this.paginationValues.pageSize,
      {
        username
      }
    );

    // this.count$ = response$.pipe(map((res) => res.recordsTotal));
     this.tableData$ = response$.pipe(map((res) => res.content));
  }

  toggleBulkUpdate(action: string){

    if(this.checkedList.length == 0 && !this.showBulkUpdateModal){
      this.alertService.warn('Please select one or more users.')
      return
    }

    this.bulkAction = action

    if(!this.showBulkUpdateModal){
      this.tableData$.subscribe((response) => {
        this.checkedItems = this.checkedList.map((i) => {
          i = response.find((x) => x.id == i)
          i.commonId = i.username
          return i
        })
      })
    }

    this.toggleModalDisplay()
  }

  toggleModalDisplay(){
    this.showBulkUpdateModal = !this.showBulkUpdateModal
  }

  receiveCheckedList(checkedList: any[]){
    this.checkedList = checkedList
  }

  setFilters(filters) {
    this.filterValues = filters;
    this.paginationValues.pageIndex =
      +this.route.snapshot.queryParamMap.get("pageIndex") || 1;
    this.paginationValues.currentPage =
      +this.route.snapshot.queryParamMap.get("currentPage") || 1;
    this.getUnverifiedUsers();
  }

  authorizeUsers(otpData: OTPModel){
    console.log(otpData)

    let { otp, comment } = otpData

    let payload: BulkUpdateModel[] = []

    this.checkedItems.forEach((e) => {
      let item = {
        id: e.id,
        referenceNo: e.username,
        requestType: 'USER',
        verifyStatus: this.bulkAction == 'approve' ? 'Y' : 'R',
        comment
      }
      payload.push(item)
    })

    console.log(payload)

    // this.userService.authorizeUsers(payload, otp).subscribe(
    //   (response) => {
    //     this.toggleModalDisplay()
    //     this.checkedItems = []
    //     this.checkedList = []

    //     this.alertService.success(`Operation Successful!`)
    //     this.getUnverifiedUsers()
    //   }, (error) => {
    //     this.alertService.error(error.toString())
    //   }
    // )

  }
}
