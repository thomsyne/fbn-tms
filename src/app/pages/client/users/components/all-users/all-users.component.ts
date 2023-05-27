import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutes, BaseTableComponent } from 'src/app/core';
import { PaginationService, FileGenerationService } from 'src/app/shared/dynamic-table';
import { UserService } from '../../services/user.service';
import { downloadCSvheaders, filters, usersTableSettings } from './all-users.constants';
import { map } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent extends BaseTableComponent implements OnInit {

  appRoutes = AppRoutes

  showCreateUserModal: boolean;
  constructor(
    paginationService: PaginationService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fileService: FileGenerationService
  ) {
    super(paginationService);
    this.tableSettings = usersTableSettings;
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

  ngOnInit() {
  }

  getUsers() {

    console.log(this.paginationValues)

    const { username } = this.filterValues;
    const response$ = this.userService.fetchAllUsers(
      this.paginationValues.pageIndex,
      this.paginationValues.pageSize,
      {
        username
      }
    );

    // this.count$ = response$.pipe(map((res) => res.recordsTotal));
     this.tableData$ = response$.pipe(map((res) => res.content));
  }

    setFilters(filters) {
    this.filterValues = filters;
    this.paginationValues.pageIndex =
      +this.route.snapshot.queryParamMap.get("pageIndex") || 1;
    this.paginationValues.currentPage =
      +this.route.snapshot.queryParamMap.get("currentPage") || 1;
    this.getUsers();
  }

    toggleCreateUserModal() {
    this.showCreateUserModal = !this.showCreateUserModal;
  }

  setPager(paginationValues) {
    this.paginationValues = paginationValues;
    this.getUsers();
  }

  routeToRoles(){
    this.router.navigate([this.appRoutes.rolesList])
  }

  generateCsv(){

  }

}
