import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { AppRoutes, BaseTableComponent } from "src/app/core";
import {
  PaginationService,
  FileGenerationService,
} from "src/app/shared/dynamic-table";
import {
  downloadCSvheaders,
  filters,
  merchantsTableSettings,
} from "./all-merchants.constants";
import { MerchantService } from "../../services/merchant.service";

@Component({
  selector: "app-all-merchants",
  templateUrl: "./all-merchants.component.html",
  styleUrls: ["./all-merchants.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllMerchantsComponent
  extends BaseTableComponent
  implements OnInit
{
  constructor(
    paginationService: PaginationService,
    private router: Router,
    private route: ActivatedRoute,
    private merchantService: MerchantService,
    private fileService: FileGenerationService
  ) {
    super(paginationService);
    this.tableSettings = merchantsTableSettings;
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
    //this.getMerchants()
  }
  appRoutes = AppRoutes;
  getMerchants() {
    console.log(this.paginationValues.pageIndex);

    const { username } = this.filterValues;
    const response$ = this.merchantService.fetchMerchants(
      this.paginationValues.pageIndex,
      this.paginationValues.pageSize,
      {
        username,
      }
    );

    // this.count$ = response$.pipe(map((res) => res.recordsTotal));
    this.tableData$ = response$.pipe(map((res) => res.data.content));
    console.log(this.tableData$);
  }

  setFilters(filters) {
    this.filterValues = filters;
    this.paginationValues.pageIndex =
      +this.route.snapshot.queryParamMap.get("pageIndex") || 1;
    this.paginationValues.currentPage =
      +this.route.snapshot.queryParamMap.get("currentPage") || 1;
    this.getMerchants();
  }

  routeToMerchantCreate() {
    this.router.navigate([this.appRoutes.createMerchant]);
  }

  setPager(paginationValues) {
    this.paginationValues = paginationValues;
    this.getMerchants();
  }

  generateCsv() {}
}
