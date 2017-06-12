export default class TopicsList {
  constructor() {
    this.list = [];
  }

  add(author, question, related, type, answers){
    const macros = new Macros(author, question, related, type, answers);
    this.list.push(macros);
  }

  getList(id){
    return id < this.list.length ? this.list[id] : false; 
    //return this.list;
  }

  getLength(){
    return  this.list.length;
  }

}

class Macros {
  constructor(author, question, related, type, answers){
    this.author = author;
    this.question = question;
    this.related = related;
    this.type = type;
    this.answers = answers;
  }
}