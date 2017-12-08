// Initialize Repos Controller
myApp.controller('ReposController', function (GithubService) {
   console.log('In ReposController'); 
   var vm = this;

   vm.repos = GithubService.repos;
   GithubService.githubRepos();
});