import { Activity } from './activity';


export class Item {
  public id: number;
  public title: string;
  public key: string;
  public activities: Array<Activity>;

  constructor() { }

}
