$(function() {
    var viewModel={
        name: ko.observable("TolikR"),
        changeName: function(){
            this.name("AVRoosin");
        },
        nameVisible: ko.observable(true)
    }
    //viewModel.displayName = ko.dependentObservable(function(){
    //    return this.name = " is" + (!this.nameVisible() ? " not":"")+ " visible";
    //},viewModel);
    //fillColorVisible: ko.observable(true);
    ko.applyBindings(viewModel);
}
 );