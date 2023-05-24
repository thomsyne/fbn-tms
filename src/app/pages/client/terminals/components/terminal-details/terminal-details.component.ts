import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService, LoaderComponent } from 'src/app/shared/utility';
import { TerminalsService } from '../../services/terminals.service';
import { AllTerminalModel } from '../../model';

@Component({
  selector: 'app-terminal-details',
  templateUrl: './terminal-details.component.html',
  styleUrls: ['./terminal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalDetailsComponent implements OnInit {
  terminalId: string = '';
  terminalInfo: AllTerminalModel

  @ViewChild(LoaderComponent, { static: true })
  loader: LoaderComponent;

  constructor(
    private readonly alertService: AlertService,
    private readonly cd: ChangeDetectorRef,
    private readonly route: ActivatedRoute,
    private readonly terminalService: TerminalsService
  ) { }

  ngOnInit() {
    this.terminalId = this.route.snapshot.params['terminalId']
    this.getTerminal()
  }

  getTerminal(){
    this.loader.start()
    this.terminalService.getTerminalById(this.terminalId).subscribe((response) => {
      this.loader.end()
      this.terminalInfo = response.data
      this.cd.detectChanges()
    })
  }

}
