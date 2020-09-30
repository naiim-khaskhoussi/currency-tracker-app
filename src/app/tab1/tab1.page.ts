import { Component } from '@angular/core';
import { CoinInfo } from '../interfaces/coin-info';
import { CoingeckoService } from '../services/coingecko-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  coinsIds: string[] = ["bitcoin", "coindeal-token", "coincome", "usat", "usda"];
  currencies: string[];
  selectedCoinId: string = "coindeal-token"
  vsCurrency: string = "usd";
  vsCurrencyInfo: CoinInfo;

  constructor(private coingeckoService: CoingeckoService) {
    this.getVsCurrencies();
  }

  async ngOnInit(){
    this.callCoingeckoService();
  }

  getCoingeckoInfo(){
    return this.coingeckoService.getCurrencyInfo(this.vsCurrency, this.selectedCoinId).toPromise();
  }

  async getVsCurrencies(){
    this.currencies = await this.coingeckoService.getSupportedVsCurrencies().toPromise();
  }

  async callCoingeckoService(){
    let data = await this.getCoingeckoInfo();
    this.vsCurrencyInfo = data[0];
  }

}
