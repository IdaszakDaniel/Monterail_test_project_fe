import angular from 'angular';

import topicsList from './topicsList';
import UsersList from './UsersList';
import GetJson from './GetJson';
import GetUsers from './GetUsers';

export default angular
  .module('app.services', [])
  .service({ topicsList })
  .service({ UsersList })
  .service({ GetUsers })
  .service({ GetJson });
