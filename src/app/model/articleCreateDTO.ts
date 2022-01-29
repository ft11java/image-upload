export class ArticleCreateDTO{
    newsTitle:String|undefined;
    newsBody:String|undefined;
    deploy:boolean|undefined;
    data!:File;

}