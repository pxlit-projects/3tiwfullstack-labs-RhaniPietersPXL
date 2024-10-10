export class Customer {
  private _name: string;
  private _email: string;
  private _city: string;
  private _street: string;
  private _country: string;
  private _vat: number;
  private _isLoyal: boolean;

  constructor(name: string, email: string, city: string, street: string, country: string, number: number) {
    this._name = name;
    this._email = email;
    this._city = city;
    this._street = street;
    this._country = country;
    this._vat = number;
    this._isLoyal = false;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get vat(): number {
    return this._vat;
  }

  set vat(value: number) {
    this._vat = value;
  }

  get isLoyal(): boolean {
    return this._isLoyal;
  }

  set isLoyal(value: boolean) {
    this._isLoyal = value;
  }
}
