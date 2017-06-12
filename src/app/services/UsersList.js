export default class UsersList {
  constructor() {
    this.list = [];
  }

  add(name, time, lastSeen, activity){
    const macros = new Macros(name, time, lastSeen, activity);
    this.list.push(macros);
  }

  getList(name){
    return this.list.filter(item => item.name == name);
  }

  getLength(){
    return  this.list.length;
  }

}

class Macros {
  constructor(name, time, lastSeen, activity){
    this.name = name;
    this.time = time;
    this.lastSeen = lastSeen;
    this.activity = activity;
  }
}