export default class ToDoItem {
    constructor(){
        this._id=null;
        this._item=null;
        this._date=null;

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
}