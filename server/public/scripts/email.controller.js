myApp.controller('EmailController', function (GithubService) {
    console.log('EmailController loaded.')
    const vm = this;

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
        if (vm.email != undefined && vm.subject != undefined && vm.message != undefined) {
            GithubService.postMessage(vm.newMessage);    
        } else {
            console.log("Form not completed, message not sent.");
        }
        

    }

});