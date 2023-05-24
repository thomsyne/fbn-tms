import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseTableComponent } from 'src/app/core';
import { FileGenerationService, PaginationService } from 'src/app/shared/dynamic-table';
import { TerminalsService } from '../../services/terminals.service';
import { downloadCSvheaders, filters, terminalOptionModalData, terminalTableSettings } from './all-terminals.constants';
import { map } from 'rxjs';

@Component({
  selector: 'app-all-terminals',
  templateUrl: './all-terminals.component.html',
  styleUrls: ['./all-terminals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllTerminalsComponent extends BaseTableComponent implements OnInit {

  showTerminalCreateOptionModal: boolean;
  modalData = terminalOptionModalData;

  constructor(
    paginationService: PaginationService,
    private router: Router,
    private route: ActivatedRoute,
    private terminalService: TerminalsService,
    private fileService: FileGenerationService
  ) {
    super(paginationService);
    this.tableSettings = terminalTableSettings;
    this.filters = filters;
    this.downloadCSvheaders = downloadCSvheaders;
    this.buttonSettings = [
      {
        title: "Open",
        params: ["terminalId"],
        class: ["btn__sm", "btn", "btn-outline-primary"],
        func: (terminalId: string) => {
          this.router.navigate([`/terminals/${terminalId}/details`]);
        },
      },
    ];
  }

  ngOnInit() {
  }

  getTerminals() {

    const { terminalId, terminalModel, status } = this.filterValues;
    const response$ = this.terminalService.fetchAllTerminals(
      this.paginationValues.pageIndex,
      this.paginationValues.pageSize,
      {
        terminalId,
        terminalModel,
        status
      }
    );

     this.tableData$ = response$.pipe(map((res) => res.data.content));
  }

    setFilters(filters) {
    this.filterValues = filters;
    this.paginationValues.pageIndex =
      +this.route.snapshot.queryParamMap.get("pageIndex") || 1;
    this.paginationValues.currentPage =
      +this.route.snapshot.queryParamMap.get("currentPage") || 1;
    this.getTerminals();
  }

  setPager(paginationValues) {
    this.paginationValues = paginationValues;
    this.getTerminals();
  }

  addTerminal(){
    
  }

  generateCsv(){
    console.log('herererere')
    this.terminalService.getDownloadTerminals().pipe(
      map((res) => {
        let csvData = []

        res.data.forEach((el) => {
          const {
            terminalId,
            merchantId,
            merchantName,
            serialNo,
            terminalModel,
            osVersion,
            brand,
            terminalCondition,
            currentLocation,
            bankCode,
            bankName,
            ptsp,
            userRef,
            status,
            entityCode,
            lastActivityDate,
            createdDate,
            createdBy
          } = el;

          const dump = {
            terminalId,
            merchantId,
            merchantName,
            serialNo,
            terminalModel,
            osVersion,
            brand,
            terminalCondition,
            currentLocation,
            bankCode,
            bankName,
            ptsp,
            userRef,
            status,
            entityCode,
            lastActivityDate,
            createdDate,
            createdBy
          }

          csvData.push(dump)
        })
        return csvData
      })
    )
    .subscribe((res) => {
      this.fileService.generateCSV(
        res,
        "Terminals Report",
        this.downloadCSvheaders
      )
    })
  }

  toggleShowTerminalCreateOptionModal() {
    this.showTerminalCreateOptionModal = !this.showTerminalCreateOptionModal;
  }

}
