import * as  interfaces  from './IWildCards'; // مفهوم فضای نام در تایپ اسکریپ
export class WildCards implements interfaces.IWildCards {

  // public constructor(id :string , imageurl:string,cardtitle:string,carddescription : string,smallcarddescription : string,tagcarddescription :string,golinkmore:string,backlinkmore :string) {
  //   this.Id = id,
  //     this.ImageUrl = imageurl,
  //     this.CardTitle = cardtitle,
  //     this.CardDescription = carddescription,
  //     this.SmallCardDescription = smallcarddescription,
  //     this.TagCardDescription = tagcarddescription,
  //     this.GoLinkMore = golinkmore,
  //     this.BackLinkMore =backlinkmore
  // }
  public constructor() {
    this.Id = '1',
      this.ImageUrl = 'https://roozaneh.net/wp-content/uploads/2019/06/-%D8%B9%D8%A7%D8%B4%D9%82%D8%A7%D9%86%D9%87-7-e1560507033544.jpg',
      this.CardTitle = 'Card title',
      this.CardDescription = `در دنیای من یک تو کافی ست
      تا بهشت را همین حوالی خودم
      شانه به شانه ی دوست داشتن تو
      تجربه کنم …`,
      this.SmallCardDescription = 'یک تو کافی ست',
      this.TagCardDescription = 'عاشقانه',
      this.GoLinkMore = 'بیشتر...',
      this.BackLinkMore = 'بازگشت'
  }
  public Id: string;
  public ImageUrl: string;
  public CardTitle: string;
  public CardDescription: string;
  public SmallCardDescription: string;
  public TagCardDescription: string;
  public GoLinkMore: string;
  public BackLinkMore: string;
}
