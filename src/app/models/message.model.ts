export class Message {
  public createTime = '';
  public read: Boolean = false;
  constructor(public body: string, public sender: string) {};
}
