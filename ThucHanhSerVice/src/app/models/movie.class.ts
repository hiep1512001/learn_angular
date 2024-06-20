export class Movie{
    public id:number|undefined;
    public name:string|undefined;
    public link:string|undefined;
    public author:string|undefined;
    
    constructor(id:number,name:string,link:string,author:string){
        this.id=id;
        this.name=name;
        this.link=link;
        this.author=author;
    }
}