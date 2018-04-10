export class ForumPost {
  public comments: any [];
  constructor(
    public owner: string,
    public title: string,
    public body: string
  ){}
}
