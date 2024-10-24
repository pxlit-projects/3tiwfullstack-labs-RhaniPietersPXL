export class Pokemon {
  private _id: number;
  private _name: string;
  private _type: string;
  private _icon: string;

  constructor(id: number, name: string, type: string, icon: string) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._icon = icon;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
