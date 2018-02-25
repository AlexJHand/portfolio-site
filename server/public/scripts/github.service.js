myApp.service('GithubService', function ($http) {
  // Object that will store our user data
  this.user = { data: {} };

  // // Message class
  // class Message {
  //   constructor(email, subject, message) {
  //     this.email = email;
  //     this.subject = subject;
  //     this.message = message;
  //   }
  // }

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

  // this.sendMessage = () => {
  //   // New message to be sent
  //   this.newMessage = new Message(this.email, this.subject, this.message);
  //   console.log('Message to be sent', this.newMessage);
  //   if (this.email != undefined && this.subject != undefined && this.message != undefined) {
  //     $http({
  //       method: 'POST',
  //       url: '/mail',
  //       data: message
  //     }).then(function (response) {
  //       console.log('Response', response);
  //     })
  //   } else {
  //     console.log("Form not completed, message not sent.");
  //   }
  // }

  // // Function called on click
  // vm.sendMessage = () => {
  //   // New message to be sent
  //   vm.newMessage = new Message(vm.email, vm.subject, vm.message);
  //   console.log('Message to be sent', vm.newMessage);
  //   if (vm.email != undefined && vm.subject != undefined && vm.message != undefined) {
  //     GithubService.postMessage(vm.newMessage);
  //   } else {
  //     console.log("Form not completed, message not sent.");
  //   }
  // }
});
