
import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from 'src/app/core';

@Pipe({
  name: 'customcurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  currencyLogo: string
  constructor(
    private storageService: StorageService
  ){}

  transform(value: any): any {
    switch (this.storageService.getLoggedInUser()?.ccy){
      case 'NGN':
        this.currencyLogo = '₦' + (value || 0)
        break

      case 'GHS':
        this.currencyLogo = 'GH₵' + (value || 0)
        break

      case 'USD':
        this.currencyLogo = '$' + (value || 0)
        break

      default:
        break
    }
    return this.currencyLogo
  }

}
