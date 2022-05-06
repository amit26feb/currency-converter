import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { ConverterModule } from '../../models/converter-model';
import { CurrencyInputComponent } from '../currency-input/currency-input.component';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  @ViewChild("inputCurrency")
  private inputCurrency = new CurrencyInputComponent();

  @ViewChild("outputCurrency")
  private outputCurrency = new CurrencyInputComponent();



  inputCurrType = "";
  outputCurrType = "";
  REST_API_SERVER = "";
  outputCurrencyObject: any;

  constructor(private httpClient: HttpClient) {
    this.REST_API_SERVER = "https://currencyapi.net/api/v1/rates?";
  }

  ngOnInit(): void {
  }

  convertCurrency() {    
    let params = new HttpParams();
    params = params.set("key", "HaSd8VL3KVwEVW6gsQb1pzGIlUZ6G2FWu2Py");
    params = params.set('output', "JSON");

    this.httpClient.get<ConverterModule.converterModel>(this.REST_API_SERVER + params.toString()).subscribe(
      (resp: any) => {
        let baseConversion = parseInt(this.inputCurrency.txtValue) / resp.rates[this.inputCurrency.currencySymbol];
        let destCurrencyRate = resp.rates[this.outputCurrency.currencySymbol];
        console.log("baseConversion", baseConversion);
        console.log("destCurrencyRate", destCurrencyRate);
        this.outputCurrency.txtValue = (baseConversion * destCurrencyRate).toString();
      }
    );
  }
}
