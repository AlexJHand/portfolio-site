myApp.service('GithubService', function ($http) {
  // Object that will store our user data
  this.user = { data: {} };

  this.postMessage = (message) => {
    console.log('In postMessage', message);
    $http({
      method: 'POST',
      url: '/mail',
      data: message
    }).then(function (response) {
      console.log('Response', response);
    })
  }
});
