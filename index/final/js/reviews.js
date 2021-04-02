export default class ToDoItem {
    constructor(){
        this._id=null;
        this._item=null;
        this._date=null;
        this._name=null;

    }
    getId(){
        return this._id;
    }
    setId(id){
         this._id = id;
    }
    getItem(){
        return this._item;
    }
    setItem(item){
         this._item = item;
    }
    getDate(){
        return this._date;
    }
    setDate(date){
         this._date = date;
    }
    getName(){
        return this._name;
    }
    setName(name){
         this._name = name;
    }
}