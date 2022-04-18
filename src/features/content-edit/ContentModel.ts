export interface IDataType{
  name: string;
  description: string;
}

export interface IContentData{
   name: string;
   description: string;
   cmsType: IDataType;
   value: any;
}
export class ContentData implements IContentData{
    public name: string;
    public description: string;
    public cmsType: IDataType;
    public value: any;

    constructor(args? : ContentData){
      if(args){
        this.name = args.name;
        this.description = args.description;
        this.cmsType = args.cmsType;
        this.value = args.value;
      }
      else{
        this.name = '';
        this.description = '';
        this.cmsType = {name: '', description: ''};
        this.value = '';
      }
      
    }
  }

export interface IContent {
    id?:string,
    name: string,
    description: string,
    tags: string[],
    data: ContentData[]
}

export class Content implements IContent {
  id?: string | undefined
  name: string = ""
  description: string = ""
  tags: string[] = []
  data: ContentData[] = []

}