import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LoaderComponent } from 'src/app/shared/utility';
import { Merchant } from '../../model';
import { MerchantService } from '../../services/merchant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MerchantDetailsComponent implements OnInit {
  merchantId: string = '';
  merchantInfo: Merchant

  @ViewChild(LoaderComponent, { static: true })
  loader: LoaderComponent;

  links: string[] = ["Unassign Terminal", "Process Details"];

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly route: ActivatedRoute,
    private readonly merchantService: MerchantService
  ) { }

  ngOnInit() {
    this.merchantId = this.route.snapshot.params['merchantId']
    this.getMerchant()
  }

  dropDownClick(linkName: any) {
    if (linkName === "Unassign Terminal"){
      
    }
      
    if (linkName === "Logout"){

    }
  }

  getMerchant(){
    this.loader.start()
    this.merchantService.getMerchantById(this.merchantId).subscribe((response) => {
      this.loader.end()
      this.merchantInfo = response.data
      this.cd.detectChanges()
    })
  }

}
