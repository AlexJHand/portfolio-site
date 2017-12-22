myApp.controller('EmailController', function (GithubService) {
    console.log('EmailController loaded.')
    var vm = this;

    // Message class
    class Message {
        constructor(email, subject, message) {
            this.email = email;
            this.subject = subject;
            this.message = message;
        }
    }
    

    // Function called on click
    vm.sendMessage = () => {
        // New message to be sent
        vm.newMessage = new Message(vm.email, vm.subject, vm.message);
        console.log('Message to be sent', vm.newMessage);
        GithubService.postMessage(vm.newMessage);

    }

});