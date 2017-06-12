export default class Single {
  /**
   * @param {TopicsList} topicsList
   */
  constructor(topicsList, UsersList) {
    "ngInject";
    this.topicsList = topicsList;
    this.UsersList = UsersList;

  	this.topics = [];
    this.obj;
  }

  $onInit(){
    console.log(this.idi);
    this.check(this.idi);
  }

  check(id){
  	this.obj = this.topicsList.getList(id);
  	this.topics.push(this.obj);
  }

  openModal(a){
    let item = this.UsersList.getList(a);
    this.UserName = item[0].name;
    this.UserTime = item[0].time;
    this.UserLastSeen = item[0].lastSeen;
    this.UserActivity = item[0].activity;
  }

}
