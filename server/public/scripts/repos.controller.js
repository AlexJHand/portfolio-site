// Initialize Repos Controller
myApp.controller('ReposController', function (GithubService) {
    console.log('In ReposController'); 
    const vm = this;

    // vm.sdLogin = this.sdLogin;
    // vm.sdMain = this.sdMain;
    // vm.sdFurious = this.sdFurious;
    // vm.sdSearch = this.sdSearch;
    // // class SocialDrinkerSlides {
    // //     constructor()
    // // }
    // vm.socialDrinkerSlides = [vm.sdLogin, vm.sdMain, vm.sdFurious, vm.sdSearch];
    // console.log("slides", vm.socialDrinkerSlides);
    // vm.socialDrinkerSlideIndex = 0;

    // vm.plusDivs = (wayToChange) => {
    //     showSDDivs(vm.socialDrinkerSlideIndex += wayToChange);
    // }

    // vm.showSDDivs = (index) => {
    //     console.log("In showSDDivs");
    //     if (index > 3) {
    //         vm.socialDrinkerSlideIndex = 0;
    //     } else if (index < 1) {
    //         vm.socialDrinkerSlideIndex = 3;
    //     } else {
    //         vm.socialDrinkerSlideIndex = index
    //     }

    //     for (let i = 0; i < vm.socialDrinkerSlides.length; i++) {
    //         console.log("Index", vm.socialDrinkerSlides[i]);
    //         vm.socialDrinkerSlides[i].style.display = "none";
    //     }

    //     vm.socialDrinkerSlides[index].style.display = "block";
    // }

    // vm.showSDDivs(vm.socialDrinkerSlideIndex);

});