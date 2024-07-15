export class ToDo{
    public id:number| undefined;
    public title:string|undefined;
    public completed:boolean|undefined;
    constructor( id:number,title:string, completed:boolean){
        this.id=id;
        this.title=title;
        this.completed=completed;
    }
}