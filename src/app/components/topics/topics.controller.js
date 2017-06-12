export default class Topics {
  /**
   * @param {TopicsList} topicsList
   */
  constructor(topicsList, UsersList, GetJson, GetUsers) {
    "ngInject";
    this.topicsList = topicsList;
    this.UsersList = UsersList;
    this.GetJson = GetJson;
    this.GetUsers = GetUsers;

  	this.topics = [];
    this.myLimit = 3;
    this.obj;
    this.id = 0;
    this.init();
  }

  send(id){
    this.parent.viw = id;
    this.parent.isVisible = true;
  }

  init(){
    let answers = this.GetJson.getData();
      answers.then(data => {
      data.questions.forEach(answer => {
                this.topicsList.add(answer.author,
                              answer.question,
                              answer.related,
                              answer.type,
                              answer.answers);
                this.check();
      });
    });
    let answers2 = this.GetUsers.getData();
    answers2.then(data => {
      data.users.forEach(answer => {
                this.UsersList.add(answer.name,
                              answer.time,
                              answer.lastSeen,
                              answer.activity);
      });
    });
  }

  check(){
  	this.obj = this.topicsList.getList(this.id);
  	this.topics.push(this.obj);
    this.id++;
  }

  openModal(a){
    let item = this.UsersList.getList(a);
  
    this.UserName = item[0].name;
    this.UserTime = item[0].time;
    this.UserLastSeen = item[0].lastSeen;
    this.UserActivity = item[0].activity;
  }

}
