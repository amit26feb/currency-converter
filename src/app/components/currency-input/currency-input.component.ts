import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CurrencySymbols } from "../../models/currency-model";

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent implements OnInit {
  public currencySymbols = Array<CurrencySymbols>();
  public txtValue = "0.00";
  public currencySymbol = "";

  @Input('disableInput') disableInput: boolean = false;

  constructor() {
    this.loadCurrencies();
  }
  loadCurrencies() {
    this.currencySymbols.push(new CurrencySymbols("AED", "United Arab Emirates Dirham"));
    this.currencySymbols.push(new CurrencySymbols("AFN", "Afghan Afghani"));
    this.currencySymbols.push(new CurrencySymbols("ALL", "Albanian Lek"));
    this.currencySymbols.push(new CurrencySymbols("AMD", "Armenian Dram"));
    this.currencySymbols.push(new CurrencySymbols("ANG", "Netherlands Antillean Guilder"));
    this.currencySymbols.push(new CurrencySymbols("AOA", "Angolan Kwanza"));
    this.currencySymbols.push(new CurrencySymbols("ARS", "Argentine Peso"));
    this.currencySymbols.push(new CurrencySymbols("AUD", "Australian Dollar"));
    this.currencySymbols.push(new CurrencySymbols("AWG", "Aruban Florin"));
    this.currencySymbols.push(new CurrencySymbols("AZN", "Azerbaijani Manat"));
    this.currencySymbols.push(new CurrencySymbols("BAM", "Bosnia-Herzegovina Convertible Mark"));
    this.currencySymbols.push(new CurrencySymbols("BBD", "Barbadian Dollar"));
    this.currencySymbols.push(new CurrencySymbols("BDT", "Bangladeshi Taka"));
    this.currencySymbols.push(new CurrencySymbols("BGN", "Bulgarian Lev"));
    this.currencySymbols.push(new CurrencySymbols("BHD", "Bahraini Dinar"));
    this.currencySymbols.push(new CurrencySymbols("BIF", "Burundian Franc"));
    this.currencySymbols.push(new CurrencySymbols("BMD", "Bermudan Dollar"));
    this.currencySymbols.push(new CurrencySymbols("BND", "Brunei Dollar"));
    this.currencySymbols.push(new CurrencySymbols("BOB", "Bolivian Boliviano"));
    this.currencySymbols.push(new CurrencySymbols("BRL", "Brazilian Real"));
    this.currencySymbols.push(new CurrencySymbols("BSD", "Bahamian Dollar"));
    this.currencySymbols.push(new CurrencySymbols("BTC", "Bitcoin"));
    this.currencySymbols.push(new CurrencySymbols("BTN", "Bhutanese Ngultrum"));
    this.currencySymbols.push(new CurrencySymbols("BWP", "Botswanan Pula"));
    this.currencySymbols.push(new CurrencySymbols("BYN", "Belarusian Ruble"));
    this.currencySymbols.push(new CurrencySymbols("BZD", "Belize Dollar"));
    this.currencySymbols.push(new CurrencySymbols("CAD", "Canadian Dollar"));
    this.currencySymbols.push(new CurrencySymbols("CDF", "Congolese Franc"));
    this.currencySymbols.push(new CurrencySymbols("CHF", "Swiss Franc"));
    this.currencySymbols.push(new CurrencySymbols("CLF", "Chilean Unit of Account (UF)"));
    this.currencySymbols.push(new CurrencySymbols("CLP", "Chilean Peso"));
    this.currencySymbols.push(new CurrencySymbols("CNH", "Chinese Yuan (Offshore)"));
    this.currencySymbols.push(new CurrencySymbols("CNY", "Chinese Yuan"));
    this.currencySymbols.push(new CurrencySymbols("COP", "Colombian Peso"));
    this.currencySymbols.push(new CurrencySymbols("CRC", "Costa Rican Colón"));
    this.currencySymbols.push(new CurrencySymbols("CUC", "Cuban Convertible Peso"));
    this.currencySymbols.push(new CurrencySymbols("CUP", "Cuban Peso"));
    this.currencySymbols.push(new CurrencySymbols("CVE", "Cape Verdean Escudo"));
    this.currencySymbols.push(new CurrencySymbols("CZK", "Czech Republic Koruna"));
    this.currencySymbols.push(new CurrencySymbols("DJF", "Djiboutian Franc"));
    this.currencySymbols.push(new CurrencySymbols("DKK", "Danish Krone"));
    this.currencySymbols.push(new CurrencySymbols("DOP", "Dominican Peso"));
    this.currencySymbols.push(new CurrencySymbols("DZD", "Algerian Dinar"));
    this.currencySymbols.push(new CurrencySymbols("EGP", "Egyptian Pound"));
    this.currencySymbols.push(new CurrencySymbols("ERN", "Eritrean Nakfa"));
    this.currencySymbols.push(new CurrencySymbols("ETB", "Ethiopian Birr"));
    this.currencySymbols.push(new CurrencySymbols("EUR", "Euro"));
    this.currencySymbols.push(new CurrencySymbols("FJD", "Fijian Dollar"));
    this.currencySymbols.push(new CurrencySymbols("FKP", "Falkland Islands Pound"));
    this.currencySymbols.push(new CurrencySymbols("GBP", "British Pound Sterling"));
    this.currencySymbols.push(new CurrencySymbols("GEL", "Georgian Lari"));
    this.currencySymbols.push(new CurrencySymbols("GGP", "Guernsey Pound"));
    this.currencySymbols.push(new CurrencySymbols("GHS", "Ghanaian Cedi"));
    this.currencySymbols.push(new CurrencySymbols("GIP", "Gibraltar Pound"));
    this.currencySymbols.push(new CurrencySymbols("GMD", "Gambian Dalasi"));
    this.currencySymbols.push(new CurrencySymbols("GNF", "Guinean Franc"));
    this.currencySymbols.push(new CurrencySymbols("GTQ", "Guatemalan Quetzal"));
    this.currencySymbols.push(new CurrencySymbols("GYD", "Guyanaese Dollar"));
    this.currencySymbols.push(new CurrencySymbols("HKD", "Hong Kong Dollar"));
    this.currencySymbols.push(new CurrencySymbols("HNL", "Honduran Lempira"));
    this.currencySymbols.push(new CurrencySymbols("HRK", "Croatian Kuna"));
    this.currencySymbols.push(new CurrencySymbols("HTG", "Haitian Gourde"));
    this.currencySymbols.push(new CurrencySymbols("HUF", "Hungarian Forint"));
    this.currencySymbols.push(new CurrencySymbols("IDR", "Indonesian Rupiah"));
    this.currencySymbols.push(new CurrencySymbols("ILS", "Israeli New Sheqel"));
    this.currencySymbols.push(new CurrencySymbols("IMP", "Manx pound"));
    this.currencySymbols.push(new CurrencySymbols("INR", "Indian Rupee"));
    this.currencySymbols.push(new CurrencySymbols("IQD", "Iraqi Dinar"));
    this.currencySymbols.push(new CurrencySymbols("IRR", "Iranian Rial"));
    this.currencySymbols.push(new CurrencySymbols("ISK", "Icelandic Króna"));
    this.currencySymbols.push(new CurrencySymbols("JEP", "Jersey Pound"));
    this.currencySymbols.push(new CurrencySymbols("JMD", "Jamaican Dollar"));
    this.currencySymbols.push(new CurrencySymbols("JOD", "Jordanian Dinar"));
    this.currencySymbols.push(new CurrencySymbols("JPY", "Japanese Yen"));
    this.currencySymbols.push(new CurrencySymbols("KES", "Kenyan Shilling"));
    this.currencySymbols.push(new CurrencySymbols("KGS", "Kyrgystani Som"));
    this.currencySymbols.push(new CurrencySymbols("KHR", "Cambodian Riel"));
    this.currencySymbols.push(new CurrencySymbols("KMF", "Comorian Franc"));
    this.currencySymbols.push(new CurrencySymbols("KPW", "North Korean Won"));
    this.currencySymbols.push(new CurrencySymbols("KRW", "South Korean Won"));
    this.currencySymbols.push(new CurrencySymbols("KWD", "Kuwaiti Dinar"));
    this.currencySymbols.push(new CurrencySymbols("KYD", "Cayman Islands Dollar"));
    this.currencySymbols.push(new CurrencySymbols("KZT", "Kazakhstani Tenge"));
    this.currencySymbols.push(new CurrencySymbols("LAK", "Laotian Kip"));
    this.currencySymbols.push(new CurrencySymbols("LBP", "Lebanese Pound"));
    this.currencySymbols.push(new CurrencySymbols("LKR", "Sri Lankan Rupee"));
    this.currencySymbols.push(new CurrencySymbols("LRD", "Liberian Dollar"));
    this.currencySymbols.push(new CurrencySymbols("LSL", "Lesotho Loti"));
    this.currencySymbols.push(new CurrencySymbols("LYD", "Libyan Dinar"));
    this.currencySymbols.push(new CurrencySymbols("MAD", "Moroccan Dirham"));
    this.currencySymbols.push(new CurrencySymbols("MDL", "Moldovan Leu"));
    this.currencySymbols.push(new CurrencySymbols("MGA", "Malagasy Ariary"));
    this.currencySymbols.push(new CurrencySymbols("MKD", "Macedonian Denar"));
    this.currencySymbols.push(new CurrencySymbols("MMK", "Myanma Kyat"));
    this.currencySymbols.push(new CurrencySymbols("MNT", "Mongolian Tugrik"));
    this.currencySymbols.push(new CurrencySymbols("MOP", "Macanese Pataca"));
    this.currencySymbols.push(new CurrencySymbols("MRU", "Mauritanian Ouguiya"));
    this.currencySymbols.push(new CurrencySymbols("MUR", "Mauritian Rupee"));
    this.currencySymbols.push(new CurrencySymbols("MVR", "Maldivian Rufiyaa"));
    this.currencySymbols.push(new CurrencySymbols("MWK", "Malawian Kwacha"));
    this.currencySymbols.push(new CurrencySymbols("MXN", "Mexican Peso"));
    this.currencySymbols.push(new CurrencySymbols("MYR", "Malaysian Ringgit"));
    this.currencySymbols.push(new CurrencySymbols("MZN", "Mozambican Metical"));
    this.currencySymbols.push(new CurrencySymbols("NAD", "Namibian Dollar"));
    this.currencySymbols.push(new CurrencySymbols("NGN", "Nigerian Naira"));
    this.currencySymbols.push(new CurrencySymbols("NIO", "Nicaraguan Córdoba"));
    this.currencySymbols.push(new CurrencySymbols("NOK", "Norwegian Krone"));
    this.currencySymbols.push(new CurrencySymbols("NPR", "Nepalese Rupee"));
    this.currencySymbols.push(new CurrencySymbols("NZD", "New Zealand Dollar"));
    this.currencySymbols.push(new CurrencySymbols("OMR", "Omani Rial"));
    this.currencySymbols.push(new CurrencySymbols("PAB", "Panamanian Balboa"));
    this.currencySymbols.push(new CurrencySymbols("PEN", "Peruvian Nuevo Sol"));
    this.currencySymbols.push(new CurrencySymbols("PGK", "Papua New Guinean Kina"));
    this.currencySymbols.push(new CurrencySymbols("PHP", "Philippine Peso"));
    this.currencySymbols.push(new CurrencySymbols("PKR", "Pakistani Rupee"));
    this.currencySymbols.push(new CurrencySymbols("PLN", "Polish Zloty"));
    this.currencySymbols.push(new CurrencySymbols("PYG", "Paraguayan Guarani"));
    this.currencySymbols.push(new CurrencySymbols("QAR", "Qatari Rial"));
    this.currencySymbols.push(new CurrencySymbols("RON", "Romanian Leu"));
    this.currencySymbols.push(new CurrencySymbols("RSD", "Serbian Dinar"));
    this.currencySymbols.push(new CurrencySymbols("RUB", "Russian Ruble"));
    this.currencySymbols.push(new CurrencySymbols("RWF", "Rwandan Franc"));
    this.currencySymbols.push(new CurrencySymbols("SAR", "Saudi Riyal"));
    this.currencySymbols.push(new CurrencySymbols("SBD", "Solomon Islands Dollar"));
    this.currencySymbols.push(new CurrencySymbols("SCR", "Seychellois Rupee"));
    this.currencySymbols.push(new CurrencySymbols("SDG", "Sudanese Pound"));
    this.currencySymbols.push(new CurrencySymbols("SEK", "Swedish Krona"));
    this.currencySymbols.push(new CurrencySymbols("SGD", "Singapore Dollar"));
    this.currencySymbols.push(new CurrencySymbols("SHP", "Saint Helena Pound"));
    this.currencySymbols.push(new CurrencySymbols("SLL", "Sierra Leonean Leone"));
    this.currencySymbols.push(new CurrencySymbols("SOS", "Somali Shilling"));
    this.currencySymbols.push(new CurrencySymbols("SRD", "Surinamese Dollar"));
    this.currencySymbols.push(new CurrencySymbols("SSP", "South Sudanese Pound"));
    this.currencySymbols.push(new CurrencySymbols("STD", "São Tomé and Príncipe Dobra (pre-2018)"));
    this.currencySymbols.push(new CurrencySymbols("STN", "São Tomé and Príncipe Dobra"));
    this.currencySymbols.push(new CurrencySymbols("SVC", "Salvadoran Colón"));
    this.currencySymbols.push(new CurrencySymbols("SYP", "Syrian Pound"));
    this.currencySymbols.push(new CurrencySymbols("SZL", "Swazi Lilangeni"));
    this.currencySymbols.push(new CurrencySymbols("THB", "Thai Baht"));
    this.currencySymbols.push(new CurrencySymbols("TJS", "Tajikistani Somoni"));
    this.currencySymbols.push(new CurrencySymbols("TMT", "Turkmenistani Manat"));
    this.currencySymbols.push(new CurrencySymbols("TND", "Tunisian Dinar"));
    this.currencySymbols.push(new CurrencySymbols("TOP", "Tongan Pa'anga"));
    this.currencySymbols.push(new CurrencySymbols("TRY", "Turkish Lira"));
    this.currencySymbols.push(new CurrencySymbols("TTD", "Trinidad and Tobago Dollar"));
    this.currencySymbols.push(new CurrencySymbols("TWD", "New Taiwan Dollar"));
    this.currencySymbols.push(new CurrencySymbols("TZS", "Tanzanian Shilling"));
    this.currencySymbols.push(new CurrencySymbols("UAH", "Ukrainian Hryvnia"));
    this.currencySymbols.push(new CurrencySymbols("UGX", "Ugandan Shilling"));
    this.currencySymbols.push(new CurrencySymbols("USD", "United States Dollar"));
    this.currencySymbols.push(new CurrencySymbols("UYU", "Uruguayan Peso"));
    this.currencySymbols.push(new CurrencySymbols("UZS", "Uzbekistan Som"));
    this.currencySymbols.push(new CurrencySymbols("VEF", "Venezuelan Bolívar Fuerte (Old)"));
    this.currencySymbols.push(new CurrencySymbols("VES", "Venezuelan Bolívar Soberano"));
    this.currencySymbols.push(new CurrencySymbols("VND", "Vietnamese Dong"));
    this.currencySymbols.push(new CurrencySymbols("VUV", "Vanuatu Vatu"));
    this.currencySymbols.push(new CurrencySymbols("WST", "Samoan Tala"));
    this.currencySymbols.push(new CurrencySymbols("XAF", "CFA Franc BEAC"));
    this.currencySymbols.push(new CurrencySymbols("XAG", "Silver Ounce"));
    this.currencySymbols.push(new CurrencySymbols("XAU", "Gold Ounce"));
    this.currencySymbols.push(new CurrencySymbols("XCD", "East Caribbean Dollar"));
    this.currencySymbols.push(new CurrencySymbols("XDR", "Special Drawing Rights"));
    this.currencySymbols.push(new CurrencySymbols("XOF", "CFA Franc BCEAO"));
    this.currencySymbols.push(new CurrencySymbols("XPD", "Palladium Ounce"));
    this.currencySymbols.push(new CurrencySymbols("XPF", "CFP Franc"));
    this.currencySymbols.push(new CurrencySymbols("XPT", "Platinum Ounce"));
    this.currencySymbols.push(new CurrencySymbols("YER", "Yemeni Rial"));
    this.currencySymbols.push(new CurrencySymbols("ZAR", "South African Rand"));
    this.currencySymbols.push(new CurrencySymbols("ZMW", "Zambian Kwacha"));
    this.currencySymbols.push(new CurrencySymbols("ZWL", "Zimbabwean Dollar"));

  }

  currencyChanged(e: any): void {
    this.currencySymbol = e.target.value;
  }
  ngOnInit(): void {

  }

  inputChanged(e: any): void {
    const input = e.target.value;
    this.txtValue = input;

    const decimalPosition = input.indexOf('.');
    if (decimalPosition != -1 && input.substring(decimalPosition + 1, input.length).length > 2) {
      this.txtValue = input.substring(0, decimalPosition + 3);
    }
  }
}
