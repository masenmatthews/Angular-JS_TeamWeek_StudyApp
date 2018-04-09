export class Message {
  createTime = new Date();
  public read: Boolean = false;
  constructor(public userKey: string, public body: string) {};

}
