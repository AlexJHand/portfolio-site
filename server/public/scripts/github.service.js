myApp.service('GithubService', function ($http) {
  // Object that will store our user data
  this.user = { data: {} };

  //Call to Github API to fetch user's profile info
  this.githubProfile = () => {
    $http({
      method: 'GET',
      url: '/github/user/',
    }).then((response) => {
      console.log(response.data);
      this.user.data = response.data;
    });
  }

  // Object that will store our repo data
  this.repos = { data: [] };
  //Call to Github API to fetch list of user's repos
  this.githubRepos = () => {
    $http({
      method: 'GET',
      url: '/github/repos/'
    }).then((response) => {
      console.log(response.data);
      this.repos.data = response.data;
    });
  }
});
